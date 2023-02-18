import React, { useState } from 'react'
import PostSelect from './PostSelect'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import PostDetail from './PostDetail'


function PostPage({ baseURL }) {
  const [displayPostId, setDisplayPostId] = useState(-1)
  const handleDiplayPostIdChange = (id) => {
    setDisplayPostId(id)
  }

  const [selectedMenu, setSelectedMenu] = useState('PickUp')

  return (
    <Box display='flex' sx={{height: '100%'}}>
      <List sx={{ width: 0.2, height: '100%', background: '#F3F3F3' }}>
        <ListItemButton selected={selectedMenu === "PickUp"} onClick={() => { setSelectedMenu('PickUp') }}>
          <ListItemIcon>
            <FavoriteIcon color='secondary'/>
          </ListItemIcon>
          <ListItemText primary="Pick up" />
        </ListItemButton>
        <ListItemButton selected={selectedMenu === "DeletePost"} onClick={() => { /*setSelectedMenu('DeletePost')*/ }}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="写真の削除" />
        </ListItemButton>
      </List>

      {selectedMenu === 'PickUp' &&
        <Box display='flex' sx={{ width: 0.8}}>
          <Box sx={{ width: 0.5, height: '100%', mx: 1, overflow: 'auto'}}>
            <PostSelect baseURL={baseURL} handler={(id) => handleDiplayPostIdChange(id)} id={displayPostId} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ border: 1 }} />
          <Box sx={{ width: 0.5, height: '100%', right: 0, p: 1, overflow: 'auto' }}>
            <PostDetail baseURL={baseURL} id={displayPostId} />
          </Box>
        </Box>
      }

      {selectedMenu === 'DeletePost' &&
      "render something"
      }

    </Box>
  )
}

export default PostPage