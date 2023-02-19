/* 
TODO:
  遷移時のアニメーションやりたい
  ImageListItemBarのハートボタンについて相談
  importの整理はしようね
  並び替えを実装
  now loading...欲しい
*/
import axios from "axios"
import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { Button, Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import PhotoIcon from '@mui/icons-material/Photo';
import styled from "styled-components"

const Post = ({ baseURL }) => {

  const [tagDatas, setTagDatas] = useState([])
  const [tags, setTags] = useState([])


  const [title, setTitle] = useState('')
  const [nickname, setNickname] = useState('')
  const [comment, setComment] = useState('')
  const [label, setLabel] = useState('')
  const [tag, setTag] = useState([])

  const getTagDatas = () => {
    axios.get(`${baseURL}tags`)
        .then(res => {
            console.log(res.data.data.map((t, i) => t.tagname))
            setTagDatas(
              res.data.data.map((t, i) => t.tagname)
            )
        })
        .catch(err => console.log(err))
}

  const selectImage = useCallback((e) => {
    const selectImage = e.target.files[0]
    setLabel(selectImage)
  }, [])

  const [imgSrc, setImgSrc] = useState('')
  const previewFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImgSrc(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const createFormData = () => {
    const formData = new FormData();
    if (!label) return
    formData.append('images', label)
    formData.append('nickname', nickname)
    formData.append('titles', title)
    formData.append('comments', comment)
    formData.append('tags[]', tag)
    return formData;
  }
  const sendFormData = async () => {
    const url = `${baseURL}posts`
    const data = await createFormData()
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    axios.post(url, data, config)
      .then(res => {
        console.log(res);
        alert("投稿に成功しました！")
      })
      .catch(err => alert("エラーが発生しました"));
    }

  useEffect(() => {
    getTagDatas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {/*FIXME: もっとおしゃれに  */}
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ height: "3rem" }} >
          <IconButton sx={{ borderRadius: '50%' }} size='small' component={Link} to="/sumaho/search">
            <ClearIcon />
          </IconButton>
          {/* FIXME: ml:26vwをもっとスマートな記述にしたい */}
          <Typography sx={{ color: "#333333", ml: '30vw', fontWeight: 'Bold' }}>
            写真投稿
          </Typography>
          <Button 
            variant="contained"
            sx={{
              fontFamily: 'Noto Sans JP',
              fontWeight: 'bold',
              display: 'flex',
              ml: 'auto',
              mr: '0px'
            }}
            onClick={()=>sendFormData()}
          >
            投稿
          </Button>
        </Toolbar>
      </AppBar>


      <Div>
        <Typography sx={{ fontFamily: "Zen Kaku Gothic New" }}>
          写真：
        </Typography>
        <IconDiv>
          <IconButton sx={{ width: "100%", height: "30vh", m: "auto", display: "block", border: "1px", borderColor: "#CDCDCD" }} component="label">
            <input hidden type="file" onChange={(e) => {
              selectImage(e)
              previewFile(e)
            }} />
            {
              //FIXME: paddingうざい
              imgSrc
                ? <ImgPrev src={imgSrc} />
                : <PhotoIcon sx={{ fontSize: "5rem", mt: "8vh" }} />
            }
          </IconButton>
        </IconDiv>

        <FlexDiv>
          <Typography sx={{ fontFamily: "Zen Kaku Gothic New", mt: "1rem" }}>
            タイトル：
          </Typography>
          <Input type="text" onChange={e=>setTitle(e.target.value)}/>
        </FlexDiv>

        <FlexDiv>
          <Typography sx={{ fontFamily: "Zen Kaku Gothic New", mt: "1rem" }}>
            ニックネーム：
          </Typography>
          <Input type="text" onChange={e=>setNickname(e.target.value)}/>
        </FlexDiv>

        <FlexDiv>
          <Typography sx={{ fontFamily: "Zen Kaku Gothic New", mt: "1rem" }}>
            タグ：
          </Typography>
          <Select value={tagDatas} onChange={e=>setTag(e.target.value)}>
            {tagDatas.map((v, i)=><option value={v}>{v}</option>)}
          </Select>
        </FlexDiv>

        <FlexDiv>
          <Typography sx={{ fontFamily: "Zen Kaku Gothic New", mt: "1rem" }}>
            コメント：
          </Typography>
          <Input type="text" onChange={e=>setComment(e.target.value)}/>
        </FlexDiv>

      </Div>
    </>
  )
}
export default Post
const Div = styled.div`
  width: 80%;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
`
const IconDiv = styled.div`
  border: solid;
  border-color: #CDCDCD;
`
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FlexDiv = styled.div`
  display: flex;
`
const Input = styled.input`
  margin-left: auto;
  margin-top: auto;
  height: 1.5rem;
  width: 60%;
`
const Select = styled.select`
  margin-left: auto;
  margin-top: auto;
  height: 1.5rem;
  width: 60%;
`