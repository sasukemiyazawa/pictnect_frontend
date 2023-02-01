import React, { useState } from 'react'
import PostSelect from './PostSelect'
import { Box, Divider } from '@mui/material'
import PostDetail from './PostDetail'


function PostPage({ baseURL }){
  const [displayPostId, setDisplayPostId] = useState(-1)
  const handleDiplayPostIdChange = (id) => {
    setDisplayPostId(id)
  }

  return(
    <Box display='flex'>
      <Box sx={{ width: 0.55, height: '100%', mx: 1, overflow: 'auto'}}>
        <PostSelect baseURL={baseURL} handler={(id) => handleDiplayPostIdChange(id)} id={displayPostId}/>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ border: 1 }} />
      <Box sx={{ width: 0.45, height: '100%', right: 0, p: 1, overflow: 'auto'}}>
        <PostDetail baseURL={baseURL} id={displayPostId}/>
      </Box>
    </Box>
  )
}

export default PostPage