import React, { useState } from 'react'

import EventCreate from './EventCreate'
import EventSelect from './EventSelect'
import EventDetail from './EventDetali'

function EventPage({baseURL}){
    //どのイベントを詳細表示するかを決めるためのステート
    const [displayEventId, setDisplayEventId] = useState(-1)
    //子コンポーネントから上記のステートを操作するためのハンドラ関数
    const handleDisplayEventIdChange = (id) =>{
        setDisplayEventId(id)
    }

    return(
        <div>
        <EventCreate baseURL={baseURL}/>
        <br/>
        <EventSelect baseURL={baseURL} handler={(id) =>handleDisplayEventIdChange(id)}/>
        <br/>
        <EventDetail baseURL={baseURL} id={displayEventId}/>
        </div>
    )
}

export default EventPage