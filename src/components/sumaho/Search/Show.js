/*
TODO: （たぶん）コメントの行数が多いときに一番下まで表示されないから直す
      そもそも改行がうまく動かないかも->確認
      タグが多いときとかも試していない->確認
*/

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { AppBar, Typography } from "@mui/material"
import { Toolbar } from "@mui/material"
import { IconButton } from "@mui/material"
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Grid } from "@mui/material"

const Show = ({ baseURL }) => {
  const [data, setData] = useState("")
  const [tagDatas, setTagDatas] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  const getData = (id) => {
    const url = `${baseURL}posts/${id}`
    axios.get(url)
      .then(res => {
        console.log(res)
        setData(res.data.data)
        setTagDatas(res.data.tags)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getData(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ height: "3rem" }} >
          {/* FIXME: 戻るボタンの挙動 */}
          <IconButton sx={{ borderRadius: '50%', backgroundColor: '#E7E7E7' }} size='small' onClick={() => navigate(-1)}>
            <ArrowBackIosTwoToneIcon />
          </IconButton>
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
          >写真投稿</Button>
        </Toolbar>
      </AppBar>

        <Img src={data.images_url} />

        <Div>
          <Typography sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", mr: "0.5rem" }} color="subtitle1.main">
            {data.titles}
          </Typography>

          <FavoriteIcon sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", fontSize: '0.8rem', position: "relative", bottom: "0.15rem" }} color="primary" />
          <Typography sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", fontSize: '0.8rem' }} color="subtitle1.main">
            {data.likeCounts}
          </Typography>
        </Div>
        <Typography sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", fontSize: "0.7rem" }} color="subtitle1.main">
          {data.nickname}さんの投稿
        </Typography>

        <TagDiv>
          <Grid container spacing={1.5}>
            {Object.keys(tagDatas).slice(0, 8).map(key => (
              <Grid item xs={3} key={key}>
                <Button variant="text" color="info" sx={{ padding: "0px", border: 2, borderRadius: '1rem', borderColor: 'secondary.main', width: '100%' }} >
                  <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'bold' }}>{tagDatas[key]}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </TagDiv>

        <Typography sx={{ fontSize: "0.8rem", mt: "0.5rem" }}>
          {data.comments}
        </Typography>

      </Container>
  )
}
export default Show
// FIXME: marginの使い方、雑かも
const Container = styled.div`
  padding: 1.5rem;
  height: calc(100vh - 5rem);
  overflow-y: scroll;
  overflow-x: hidden;
`
const Img = styled.img`
  margin-top: 4rem;
  margin-bottom: 0.2rem;
  width: 100%;
  position: relative;
  object-fit: cover;
`
const Div = styled.div`
  display: flex;
  align-items: flex-end;
`
const TagDiv = styled.div`
  margin: 0.5rem;
  width: 100%;
  margin-left: 0;
`