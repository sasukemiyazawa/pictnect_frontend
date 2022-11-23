import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventEdit from './EventEdit'

function EventDetail({baseURL, id}){
    const [eventname, setEventname] = useState('')
    const [contents, setContents] = useState('')
    const [term, setTerm] = useState('')
    const [image, setImage] = useState('')
    const [tags, setTags] = useState('')

    //データの取得
    const getEvent = async() => {
        if(id !== -1){
            await axios.get(baseURL + '/events/' + id)
            .then(res => {
                setEventname(res.data.data.eventname)
                setContents(res.data.data.contents)
                setTerm(res.data.data.term)
                setImage(res.data.data.image_url)
                setTags(res.data.tags)
            })
            .catch(err => {
                alert("エラーが発生しました")
                console.log(err)
            })
        }
    }

    //idが変更されたときに再レンダリング
    useEffect(()=>{
        getEvent()
    }, [id])

    //リストで何もクリックされていない時id=-1なのでレンダリングをしない
    if(id !== -1){
        return(
            <>
            {eventname},{contents},{term},{tags}
            <img src={image} alt = ''/>
            <EventEdit baseURL={baseURL} id={id}/>
            </>
        )
    }
    else{
        return null
    }
}

export default EventDetail