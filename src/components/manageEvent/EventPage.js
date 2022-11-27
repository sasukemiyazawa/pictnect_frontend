import React, { useState } from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
// import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'

import EventCreate from './EventCreate'
import EventSelect from './EventSelect'
import EventDetail from './EventDetali'

function EventPage({ baseURL }) {
  //どのイベントを詳細表示するかを決めるためのステート
  const [displayEventId, setDisplayEventId] = useState(-1)
  //子コンポーネントから上記のステートを操作するためのハンドラ関数
  const handleDisplayEventIdChange = (id) => {
    setDisplayEventId(id)
  }
  //選択されているメニューを判別するためのステート
  const [selectedMenu, setSelectedMenu] = useState('ManageEvent')

  return (
    <Box display='flex' sx={{height: '100%'}}>
      <List sx={{ width: 0.2, height: '100%', background: '#F3F3F3' }}>
        <ListItemButton selected={selectedMenu === "ManageEvent"} onClick={() => { setSelectedMenu('ManageEvent') }}>
          <ListItemIcon>
            <ModeEditOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="イベント管理" />
        </ListItemButton>
        <ListItemButton selected={selectedMenu === "ManageTag"} onClick={() => { setSelectedMenu('ManageTag') }}>
          <ListItemIcon>
            <SellOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="タグ管理" />
        </ListItemButton>
      </List>

      {selectedMenu === 'ManageEvent' &&
        <Box display='flex' sx={{ width: 0.8 }}>
          <Box sx={{ width: 0.5, height: '100%', mx: 1, overflow: 'auto' }}>
            <EventSelect baseURL={baseURL} handler={(id) => handleDisplayEventIdChange(id)} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ border: 1 }} />
          <Box sx={{ width: 0.45, height: '100%', mx: 1, right: 0, }}>
            <EventDetail baseURL={baseURL} id={displayEventId} />
          </Box>
        </Box>
      }

      {selectedMenu === 'ManageTag' && "render something"}
    </Box>
  )
}

export default EventPage