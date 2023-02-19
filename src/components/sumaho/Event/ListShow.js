import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ImageList, Typography } from "@mui/material"
import { ImageListItem } from "@mui/material"
import { ImageListItemBar } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from "@mui/material"
import { Toolbar } from "@mui/material"
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone'
import styled from "styled-components"


/* TODO: useEffectからevent情報取得 -> eventのtagでgetImage -> 表示 */
const ListShow = ({ baseURL, setTransition, eId }) => {
  const { id } = useParams()
  const [datas, setDatas] = useState([])
  const [tag, setTag] = useState("")
  const navigate = useNavigate()
  const getImage = (id) => {
    const url = `${baseURL}posts/search_tag/${id}`
    axios.get(url)
      .then(res => {
        console.log(res.data.data)
        setDatas(res.data.data)
        setTag(res.data.tag)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getImage(parseInt(eId))
    // console.log(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <>
      {/*FIXME: もっとおしゃれに  */}

      <Toolbar sx={{ height: "3rem", mt: "1rem" }} >
        {/* <IconButton sx={{ borderRadius: '50%', backgroundColor: '#E7E7E7' }} size='small' component={Link} onClick={()=>navigate(-1)}> */}
        <IconButton sx={{ borderRadius: '50%', backgroundColor: '#E7E7E7' }} size='small' component={Link} onClick={()=>setTransition(false)}>
          <ArrowBackIosTwoToneIcon />
        </IconButton>
        {/* FIXME: ml:26vwをもっとスマートな記述にしたい */}
        <Typography sx={{ fontFamily: "Zen Kaku Gothic New", color: "#333333", ml: '26vw', fontWeight: 'regular', fontSize: '1.5rem' }}>
          イベント
        </Typography>
      </Toolbar>
      <TypoDiv>
        <Typography sx={{ fontFamily: "Zen Kaku Gothic New", color: "#000000",fontWeight: 'Bold', fontSize: '0.7rem' }}>
          コミュニティスペース内で仮装をし、写真をとりました。
          仮装はこちらで用意したものを着ても持ち込みもOKでした。
        </Typography>
      </TypoDiv>

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

export default ListShow

const ImageListDiv = styled.div`
  width: 85%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`
const TypoDiv = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`