import { useState } from 'react'
import { useCallback } from "react"
import axios from 'axios'
import styled from "styled-components"
import {
  Button, DialogContent, DialogActions,
  DialogTitle, TextField, Divider, Box, Input
} from '@mui/material'
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';

const EventCreate = ({ baseURL, handler }) => {
  const [eventname, setEventname] = useState('')
  const [contents, setContents] = useState('')
  const [term, setTerm] = useState(0)
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])

  //画像入力部分
  const [image, setImage] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const selectImage = useCallback((e) => {
    const files = e.target.files
    if (selectImage.length > 0) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(files[0])
        setImageSrc(e.target.result)
      }
      reader.readAsDataURL(files[0])
    }
  }, [image])


  const addTag = () => {
    tags.push(tag)
    const tmp = new Set(tags)
    setTags(Array.from(tmp))
  }

  const deleteTag = (value) => {
    setTags(tags.filter((tags, index) => {
      return (tags !== value)
    }))
  }

  //送信用データの作成
  const createFormData = () => {
    const formData = new FormData()
    formData.append('eventname', eventname)
    formData.append('contents', contents)
    formData.append('term', term)
    formData.append('image', image)
    tags.forEach((tag) => {
      formData.append('tags[]', tag)
    })
    return formData
  }

  //バックエンドへのデータの送信
  const sendFormData = async () => {
    const data = await createFormData()
    await axios.post(baseURL + 'events', data, { headers: {} })
      .then(res => {
        console.log(res);
        alert("投稿に成功しました！")
      })
      .catch(err => {
        alert("エラーが発生しました")
      })
  }

  return (
    <Box sx={{ height: 'auto' }}>
      <DialogTitle>イベント作成</DialogTitle>
      <DialogContent>
        <Box display='flex' sx={{ width: "100%", flexDirection: 'column' }}>
          {
            image ?
              <Preview src={imageSrc} alt='Preview' />
              :
              <PhotoSizeSelectActualOutlinedIcon sx={{ mx: 'auto', fontSize: 150 }} />
          }
          <Button variant='contained' component="label" sx={{ mx: 'auto' }}>
            <input type="file" accept='image/*' hidden onChange={e => selectImage(e)} />
            画像を選択
          </Button>
        </Box>
        <Divider sx={{ my: 1 }} />
        <TextField id='eventname' autoFocus label="イベント名" variant="standard" margin="dense" fullWidth onChange={e => setEventname(e.target.value)} />
        <TextField id='term' autoFocus label="期間" variant="standard" margin="dense" fullWidth onChange={e => setTerm(e.target.value)} />
        <TextField id='tag' autoFocus label="タグ" variant="standard" margin="dense" fullWidth onChange={e => setTag(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              addTag()
              document.getElementById('tag').value = ''
            }
          }} />
        {tags.map((value, index) => (
          tag !== '' &&
          <Box onClick={() => deleteTag(value)}
            sx={{ display: 'inline-block', border: 1, borderColor: "#D76B6B", borderRadius: 3, mx: 0.5, px: 1 }} key={index}>
            {value}
          </Box>
        ))}
        <Divider sx={{ my: 1 }} />
        <TextField id='contents' autoFocus label="イベント詳細" variant="standard" multiline maxRows={4} margin="dense" fullWidth onChange={e => setContents(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={() => { handler(false) }}>キャンセル</Button>
        <Button variant='contained' onClick={() => { handler(false); sendFormData() }}>イベント作成</Button>
      </DialogActions>
    </Box>
  )
}

export default EventCreate

const Preview = styled.img`
  width: auto;
  max-height: 300px;
  object-fit: scale-down;
`