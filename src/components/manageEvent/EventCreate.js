import { useState } from 'react'
import { useCallback } from "react"
import axios from 'axios'
import { Button, DialogContent, DialogContentText, DialogActions, DialogTitle, TextField, Divider, Box} from '@mui/material'

const EventCreate = ({ baseURL, handler }) => {
  const [eventname, setEventname] = useState('')
  const [contents, setContents] = useState('')
  const [term, setTerm] = useState(0)
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])

  //画像入力部分
  const [image, setImage] = useState('')
  const selectImage = useCallback((e) => {
    const selectImage = e.target.files[0]
    setImage(selectImage)
  }, [])


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
    await axios.post(baseURL + '/events', data, { headers: {} })
      .then(res => {
        console.log(res);
        alert("投稿に成功しました！")
      })
      .catch(err => {
        alert("エラーが発生しました")
      })
  }

  return (
    <Box sx={{width: 600, height: 'auto'}}>
      <DialogTitle>イベント作成</DialogTitle>
      <DialogContent>
        <Divider sx={{my: 1}}/>
        <TextField id='eventname' autoFocus label="イベント名" variant="standard" margin="dense" fullWidth onChange={e => setEventname(e.target.value)}/>
        <TextField id='term' autoFocus label="期間" variant="standard" margin="dense" fullWidth onChange={e => setTerm(e.target.value)}/>
        <TextField id='tag' autoFocus label="タグ" variant="standard" margin="dense" fullWidth onChange={e => setTag(e.target.value)}
         onKeyDown={e => {if(e.key === 'Enter'){
          addTag()
          document.getElementById('tag').value = ''
          }}}/>
         {tags.map((value, index) => (
              tag !== '' &&
              <Box sx={{display: 'inline-block', border: 1, borderColor: "#D76B6B", borderRadius: 3, mx: 0.5, px: 1}} key={index}>{value}</Box>
            ))}
        <Divider sx={{my: 1}}/>
        <TextField id='contents' autoFocus label="イベント詳細" variant="standard" margin="dense" fullWidth onChange={e => setContents(e.target.value)}/>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={()=>handler(false)}>キャンセル</Button>
        <Button variant='contained' onClick={()=>{handler(false)}}>イベント作成</Button>
      </DialogActions>
    </Box>
  )
}

export default EventCreate