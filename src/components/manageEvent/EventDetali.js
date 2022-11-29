import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "styled-components"
import axios from 'axios'

import EventEdit from './EventEdit'

function EventDetail({ baseURL, id }) {
  const [eventname, setEventname] = useState('')
  const [contents, setContents] = useState('')
  const [term, setTerm] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')

  //データの取得
  const getEvent = async () => {
    if (id !== -1) {
      await axios.get(baseURL + '/events/' + id)
        .then(res => {
          setEventname(res.data.data.eventname)
          setContents(res.data.data.contents)
          setTerm(res.data.data.term)
          setImage(res.data.data.image_url)
          setTags(res.data.tags)
        })
        .catch(err => {
          alert("エラーが発生しました")
          console.log(err)
        })
    }
  }

  //idが変更されたときに再レンダリング
  useEffect(() => {
    getEvent()
  }, [id])

  //リストで何もクリックされていない時id=-1なのでレンダリングをしない
  if (id !== -1) {
    return (
      <div>
        <Box display='flex' sx={{ width: "100%", flexDirection: 'column' }}>
          <Box sx={{ width: "100%" }}>
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: 30 }}>{eventname}</Typography>
              <Button variant='contained'>イベント編集</Button>
            </Box>
            <Typography>開催日時 : {term}</Typography>
            タグ:
            {tags.split(",").map((tag) => (
              tag !== '' &&
              <Box sx={{display: 'inline-block', border: 1, borderColor: "#D76B6B", borderRadius: 3, mx: 0.5, px: 1}}>{tag}</Box>
            ))}

            <Typography>
              <FavoriteIcon color='secondary' fontSize='small' /> × まだイベントごとに集計するやつ作ってません
            </Typography>
          </Box>
          <Divider sx={{ m: 1 }} />
          <Box sx={{ width: "100%" }}>
            <Typography>{contents}</Typography>
          </Box>
          <Divider sx={{ m: 1 }} />
          <DetailImg src={image} />
        </Box>
      </div>
    )
  }
  else {
    return null
  }
}

export default EventDetail

const DetailImg = styled.img`
  margin: 20px;
  width: auto;
  height: auto;
`