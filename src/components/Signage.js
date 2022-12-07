import axios from "axios"
import { useEffect, useState, useRef} from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import Slides from "./Slides"
import EventSlide from "./EventSlide"
import styled from "styled-components"
import Header from "./Header"

const Signage = ({ baseURL }) => {

  const [datas, setDatas] = useState({})
  const [event, setEvent] = useState({})
  const [slide, setSlide] = useState("")
  const ref = useRef("")
  var destState = 0

  const getDatas = () => {
    const url = baseURL + `posts/`
    axios.get(url)
      .then(res => {
        // console.log(res)
        setDatas(res.data.data)
      })
      .catch(err => console.log(err))
  }

  const getEventData = () => {
    const url = baseURL + `events/`
    axios.get(url)
      .then(res => {
        console.log(res.data.data[0])
        setEvent(res.data.data[0])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDatas()
    getEventData()
  }, [])

  useEffect(() => {
    // setState(destState)
    if (ref.current) {
      console.log(ref.current.splide.index)
    }
  }, [])

  return (
    <Container>
      {/* <img src={datas.images_url} /> */}
      {/* <h1>{splide.index}</h1> */}
      {/* <input type="number" value={state} placeholder="num" onChange={e => setState(e.target.value)} /> */}

      <Header />

      <Splide
        options={{
          autoplay: false,
          interval: 3000,
          type: 'loop',
          height: '90vh',
          perPage: 1,
          direction: 'ttb',
          paginationDirection: 'ttb',
          arrows: false,
          pagination: true,

          // start: 2,
        }}

        onMoved={(splide, index, prev, dest) => {
          if (dest === 10) {
            destState = 2
            console.log(setSlide)
            setSlide(2)
          }
          else {
            destState = 1
            setSlide(1)
          }
          console.log(dest, destState)
        }}

        ref={ ref }
      >


        {Object.keys(datas).map(key => <Slides key={key} data={datas[key]} />)}
        {/* <EventSlide event={event} /> */}

      </Splide>
      <NextSlide></NextSlide>
    </Container>
  )
}
export default Signage

const Container = styled.div`
  height: 100vh;
  aspect-ratio: 9/16;
  background-color: #707070;
`

const NextSlide = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  top: 0px;
  background-color: 
  ${({ state }) => state === 1
    ? "#CF5E9B"
    : "#CFE7E9"
  };
`