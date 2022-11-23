import React, { useState } from 'react'

import EventCreate from './EventCreate'
import EventSelect from './EventSelect'
import EventDetail from './EventDetali'

function EventPage({baseURL}){
    const [displayEventId, setDisplayEventId] = useState(-1)

    const handleDisplayEventIdChange = (id) =>{
        setDisplayEventId(id)
    }

    return(
        <>
        <EventCreate baseURL={baseURL}/>
        <br/>
        <EventSelect baseURL={baseURL} handler={(id) =>handleDisplayEventIdChange(id)}/>
        <br/>
        <EventDetail baseURL={baseURL} id={displayEventId}/>
        </>
    )
}

export default EventPage