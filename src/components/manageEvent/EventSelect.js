import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventListItem from './EventListItem'

const EventSelect = ({baseURL, handler}) =>{
    const [events, setEvents] = useState([])

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


    return(
        <>
        {events.map((data) => {
            return(
                <>
                <br/>
                <EventListItem data={data} handler={(id) => handler(id)} key={data.id}/>
                <br/>
                </>
            )
        })}
        </>
    )
}

export default EventSelect