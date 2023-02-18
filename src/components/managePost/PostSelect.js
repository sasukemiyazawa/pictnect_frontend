import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, ImageList, ImageListItem } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

function PostSelect({ baseURL, handler, id }){
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    await axios.get(baseURL + 'posts')
      .then(res => {
        setPosts(res.data.data)
      })
      .catch(err => {
        alert("エラーが発生しました")
        console.log(err)
      })
  }

  useEffect(() => {
    getPosts()
  }, [baseURL])

  return(
    <Box sx={{px: 2}}>
      <ImageList cols={3} >
        {posts.map((data) => {
          return (
            <ImageListItem key = {data.id} onClick={() => {handler(data.id);getPosts()}}>
                <img src={data.images_url} loading='lazy'></img>
                {data.pickup ? <FavoriteIcon color='secondary' sx={{position: 'absolute', bottom: 5, right: 5 }}/> : null}
            </ImageListItem>
          )
        })}
      </ImageList>
    </Box>
  )
}

export default PostSelect
