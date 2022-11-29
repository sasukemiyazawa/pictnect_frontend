import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button } from '@mui/material'
import styled from "styled-components"
import logoicon from './image/pictnect_logo.png'
import logotext from './image/pictnect_logotype.png'
import EventPage from './manageEvent/EventPage'

function ManagePage({ baseURL }) {
  //どの機能を選んでいるかの判別用ステート
  const [selectedFunction, setSelectedFunction] = useState('Photo')

  return (
    <div>
      <AppBar position='sticky' color="default" sx= {{boxShadow: 0}}>
        <Toolbar>
          <LogoIcon src={logoicon}/>
          <LogoText src={logotext}/>
          <Box display='flex' sx={{mx: 30}}>
            <Button onClick={() => { setSelectedFunction('Photo') }}>写真</Button>
            <Button onClick={() => { setSelectedFunction('Event') }}>イベント</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {selectedFunction === 'Photo' &&
        "本日の議題はフォントのお話、配色のお話、比率のお話の3点でお送りします"
      }

      {selectedFunction === 'Event' &&
        <Box sx={{ height: '90vh' }}>
          <EventPage baseURL={baseURL} />
        </Box>
      }
    </div>
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