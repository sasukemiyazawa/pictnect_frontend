import axios from "axios"
import { useEffect, useState } from "react"
import ListItem from "./ListItem"
import ListShow from "./ListShow"

const List = ({ baseURL }) => {
  const [events, setEvents] = useState({})
  const [eId, setEId] = useState("")
  const [transiton, setTranstion] = useState(false)
  const getEvents = () => {
    const url = `${baseURL}events`
    axios.get(url)
      .then(res => {
        console.log(res.data.data)
        setEvents(res.data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {transiton 
      ? <ListShow baseURL={baseURL} setTransition={setTranstion} eId={eId}/>
      : Object.keys(events).map(key => <ListItem key={key} event={events[key]} setTransition={setTranstion} setEId={setEId} />)
      }
    </>
  )
}
export default List