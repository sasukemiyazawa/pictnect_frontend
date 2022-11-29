import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button } from '@mui/material'
import EventPage from './manageEvent/EventPage'

function ManagePage({ baseURL }) {
  //どの機能を選んでいるかの判別用ステート
  const [selectedFunction, setSelectedFunction] = useState('Photo')

  return (
    <div>
      <AppBar position='sticky' color="default">
        <Toolbar>
          ぴくとねくと
          <Box display='flex' sx={{mx: "auto"}}>
            <Button onClick={() => { setSelectedFunction('Photo') }}>写真</Button>
            <Button onClick={() => { setSelectedFunction('Event') }}>イベント</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {selectedFunction === 'Photo' &&
        "render something"
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