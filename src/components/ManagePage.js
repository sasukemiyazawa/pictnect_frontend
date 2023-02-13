import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Box, Button } from '@mui/material'
import styled from "styled-components"
import logoicon from './image/pictnect_logo.png'
import logotext from './image/pictnect_logotype.png'
import EventPage from './manageEvent/EventPage'
import PostPage from './managePost/PostPage'

function ManagePage({ baseURL }) {
  //どの機能を選んでいるかの判別用ステート
  const [selectedFunction, setSelectedFunction] = useState('Photo')

  useEffect(()=>{},[selectedFunction])

  return (
    <Box>
      <AppBar position='sticky' color="default" sx= {{boxShadow: 0, borderBottom: 3, borderColor: "#EEEEEE"}}>
        <Toolbar>
          <LogoIcon src={logoicon}/>
          <LogoText src={logotext}/>
          <Box display='flex' sx={{mx: 30}}>
            <Button onClick={() => { setSelectedFunction('Photo') }} sx={{ height: 64}}>写真</Button>
            <Button onClick={() => { setSelectedFunction('Event') }} sx={{ height: 64}}>イベント</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {selectedFunction === 'Photo' &&
        <Box sx={{ height: '88vh'}}>
            <PostPage baseURL={baseURL}/>
        </Box>
      }

      {selectedFunction === 'Event' &&
        <Box sx={{ height: '88vh' }}>
          <EventPage baseURL={baseURL} />
        </Box>
      }
    </Box>
  )
}

export default ManagePage

const LogoIcon = styled.img`
  height: 60px;
  width: auto;
`

const LogoText = styled.img`
  height: 35px;
  width: auto;
  margin-left: 10px;
`