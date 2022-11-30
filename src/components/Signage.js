import axios from "axios"
import { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import Slides from "./Slides"
import EventSlide from "./EventSlide"
import styled from "styled-components"
import Header from "./Header"

const Signage = ({ baseURL }) => {

  const [datas, setDatas] = useState({})
  const [event, setEvent] = useState("")
  const [state, setState] = useState(0)

  const getDatas = () => {
    const url = baseURL + `posts/`
    axios.get(url)
      .then(res => {
        console.log(res)
        setDatas(res.data.data)
      })
      .catch(err => console.log(err))
  }

  const getEventData = () => {
    const url = baseURL + `events`
    axios.get(url)
      .then(res => {
        console.log(res)
        setEvent(res.data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDatas()
    getEventData()
  }, [])

  return (
    <Container>
      {/* <img src={datas.images_url} /> */}
      {/* <h1>{splide.index}</h1> */}
      {/* <input type="number" value={state} placeholder="num" onChange={e => setState(e.target.value)} /> */}

      <Header />

      <Splide
        options={{
          autoplay: true,
          interval: 3000,
          type: 'loop',
          height: '500px',
          perPage: 1,
          direction: 'ttb',
          paginationDirection: 'ttb',
        }}

        onMoved={(splide, newIndex) => {
          if (newIndex == 8) ;
          // console.log(newIndex);
        }}
      >


        {Object.keys(datas).map(key => <Slides key={key} data={datas[key]} />)}
        <EventSlide />

      </Splide>
    </Container>
  )
}
export default Signage

const Container = styled.div`
  height: 100vh;
  aspect-ratio: 9/16;
  background-color: #707070;
`