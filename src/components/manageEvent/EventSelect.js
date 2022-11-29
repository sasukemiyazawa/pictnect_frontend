import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components"
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Box, Button, AppBar, Toolbar } from '@mui/material'

const EventSelect = ({ baseURL, handler }) => {
  const [events, setEvents] = useState([])
  //イベントの取得・オブジェクトをそのままステートへ保存
  const getEvents = async () => {
    await axios.get(baseURL + '/events')
      .then(res => {
        setEvents(res.data.data)
      })
      .catch(err => {
        alert("エラーが発生しました")
        console.log(err)
      })
  }


  useEffect(() => {
    getEvents()
  }, [])

  //個々のイベントをmapで取り出しListItemをレンダリング
  return (
    <div>
      <AppBar color='inherit' sx={{ position: 'sticky', top: 0, boxShadow: 0 }}>
        <Toolbar>
          <Box display='flex' sx={{ justifyContent: 'space-between' ,width: 1 }}>
            <Typography sx={{ fontSize: 30 }}>イベント一覧</Typography>
            <Button variant='contained'>イベント作成</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <List>
        {events.map((data) => {
          return (
            <ListItem key={data.id} onClick={() => handler(data.id)} sx={{ border: 1, borderRadius: 5, my: 1 }} alignItems="flex-start">
              <ListItemAvatar sx={{ m: 1 }}>
                <EventImg alt='' src={data.image_url} variant='rounded' />
              </ListItemAvatar>
              <ListItemText primary={<Typography sx={{ fontSize: 30 }}>{data.eventname}</Typography>} secondary={data.term} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default EventSelect

const EventImg = styled(Avatar)`
  width: 215px;
  height: 117px;
  img{object-fit: scale-down;}
`