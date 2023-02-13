import React, { useEffect, useState } from 'react'
import { Box, ToggleButton, Divider, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import styled from "styled-components"
import axios from 'axios'

function PostDetail({baseURL, id}) {
  const [nickname, setNickname] = useState('')
  const [titles, setTitles] = useState('')
  const [comments, setComments] = useState('')
  const [likeCounts, setLikeCounts] = useState(0)
  const [images, setImages] = useState('')
  const [tags, setTags] = useState([])
  const [pickupflag, setPickUpFlag] = useState(false)

  const getPost = async() => {
    if (id !== -1){
      await axios.get(baseURL + '/posts/' + id)
        .then(res => {
          setNickname(res.data.data.nickname)
          setTitles(res.data.data.titles)
          setComments(res.data.data.comments)
          setLikeCounts(res.data.data.likeCounts)
          setImages(res.data.data.images_url)
          setTags(res.data.tags)
          setPickUpFlag(res.data.data.pickup)
          console.log(res)
        })
        .catch(err => {
          alert("エラーが発生しました")
          console.log(err)
        })
    }
  }

  const pickUp = async() => {
    await axios.get(baseURL + '/posts/' + id + '/pickup')
      .then(res => {
        setPickUpFlag(res.data.data.pickup)
      })
      .catch(err => {
        alert("エラーが発生しました")
        console.log(err)
      })
  }

  useEffect(() => {
    getPost()
  }, [id])

  if (id !== -1){
    return (
      <Box sx={{position:'relative', flexDirection: 'column', px: '10px'}} display='flex'>
        <DetailImg src={images} loading='lazy'/>
        <Typography sx={{ fontSize: 30 }}>{titles}</Typography>
        <Typography>投稿者 : {nickname}</Typography>
        タグ:
        {tags.map((tag) => (
          tag !== '' &&
          <Box sx={{display: 'inline-block', border: 1, borderColor: "#D76B6B", borderRadius: 3, mx: 0.5, px: 1}}>{tag}</Box>
        ))}
        <Typography>
              <FavoriteIcon color='secondary' fontSize='small' /> × {likeCounts}
        </Typography>
        <Divider sx={{ m: 1 }} />
        <Typography>{comments}</Typography>
        <ToggleButton color='secondary' size='large' sx={{position: 'fixed', bottom: 5, right: 5, borderRadius: 10}} selected={pickupflag} onChange={()=> {pickUp()}}>
            <FavoriteIcon fontSize='large'/>
        </ToggleButton>
      </Box>
    )
  }else{
    return null
  }
}

export default PostDetail

const DetailImg = styled.img`
  margin: auto;
  width: 80%;
  height: auto;
  text-align: center;
`