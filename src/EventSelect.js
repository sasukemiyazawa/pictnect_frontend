import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EventSelect = ({baseURL}) =>{
    const [events, setEvents] = useState([])

    const getEvent = async() => {
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
        getEvent()
    }, [])

    console.log(events)

    return(
        <div>
            {events.map((data) => {
                console.log(data.image_url);
                return(<img src={data.image_url}/>)
            })}
        </div>
    )
}

export default EventSelect