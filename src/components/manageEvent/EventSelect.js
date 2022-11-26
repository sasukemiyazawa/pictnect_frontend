import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components"
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography} from '@mui/material'

const EventSelect = ({baseURL, handler}) =>{
    const [events, setEvents] = useState([])
    //イベントの取得・オブジェクトをそのままステートへ保存
    const getEvents = async() => {
        await axios.get(baseURL + '/events')
        .then(res => {
            setEvents(res.data.data)
        })
        .catch(err => {
            alert("エラーが発生しました")
            console.log(err)
        })
    }


    useEffect(()=>{
        getEvents()
    }, [])

    //個々のイベントをmapで取り出しEventListItemへデータを渡しレンダリング
    return(
        <div>
        <List>
            {events.map((data) => {
                return(
                    // <EventListItem data={data} handler={(id) => handler(id)} key={data.id}/>
                    <ListItem key={data.id} onClick={()=>handler(data.id)} sx={{border: 1, borderRadius: 5, margin: 2}} alignItems="flex-start">
                        <ListItemAvatar>
                            <EventImg alt='' src={data.image_url} variant="rounded"/>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography sx={{fontSize: 30}}>{data.eventname}</Typography>} secondary={data.term}/>
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