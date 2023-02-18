/* 
TODO:
  遷移時のアニメーションやりたい
  ImageListItemBarのハートボタンについて相談
  importの整理はしようね
  並び替えを実装
  now loading...欲しい
*/
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ImageList, Typography } from "@mui/material"
import { ImageListItem } from "@mui/material"
import { ImageListItemBar } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from "@mui/material"
import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone'
import styled from "styled-components"

const Results = ({ baseURL }) => {
  const { tag_id } = useParams()
  const [datas, setDatas] = useState([])
  const [tag, setTag] = useState("")
  const getImage = (id) => {
    const url = `${baseURL}posts/search_tag/${id}`
    axios.get(url)
      .then(res => {
        // console.log(res)
        setDatas(res.data.data)
        setTag(res.data.tag)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getImage(parseInt(tag_id))
    // console.log(tag_id)
    // 以下のコメントはwarningを消すため
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {/*FIXME: もっとおしゃれに  */}
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ height: "3rem" }} >
          <IconButton sx={{ borderRadius: '50%', backgroundColor: '#E7E7E7' }} size='small' component={Link} to="/sumaho/search">
            <ArrowBackIosTwoToneIcon />
          </IconButton>
          {/* FIXME: ml:26vwをもっとスマートな記述にしたい */}
          <Typography sx={{ color: "#333333", ml: '26vw', fontWeight: 'Bold' }}>
            検索結果
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              fontFamily: 'Noto Sans JP',
              fontWeight: 'bold',
              display: 'flex',
              ml: 'auto',
              mr: '0px'
            }}
            size="large"
            component={Link}
            to="/sumaho/post"
          >写真投稿</Button>
        </Toolbar>
      </AppBar>

      <ImageListDiv>
        <Typography sx={{ mb: "0.5rem", fontFamily: "Zen Kaku Gothic New", fontWeight: "Bold" }}>
          {tag} &nbsp; の検索結果：{datas.length}枚
        </Typography>
        <ImageList variant="masonry" sx={{ pb: "5rem", mt: 0 }}>
          {datas.map((data) => (
            <ImageListItem key={data.images_url} component={Link} to={`/sumaho/show/${data.id}`}>
              <img
                src={data.images_url}
                alt="写真"
                loading="lazy"
              />
              <ImageListItemBar
                title={data.titles}
                subtitle={<><FavoriteIcon sx={{ fontSize: '0.6rem' }} color="secondary" />{data.likeCounts}</>}
                sx={{
                  fontFamily: 'Noto Sans JP',
                  height: '2.5rem',
                  "& .MuiImageListItemBar-title": { fontSize: '0.7rem', fontWeight: 'bold' },
                }}
                actionIcon={
                  <IconButton>
                    <FavoriteIcon color="secondary" />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </ImageListDiv>
    </>
  )
}
export default Results

const ImageListDiv = styled.div`
  width: 85%;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
`