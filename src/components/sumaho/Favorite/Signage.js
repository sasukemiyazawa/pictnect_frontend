import axios from "axios"
import { useEffect, useState, useRef, useCallback } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import Slides from "./Slides"
import EventSlide from "./EventSlide"
import styled from "styled-components"
import Header from "./Header"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./snow.json";

const Signage = ({ baseURL }) => {

  const [datas, setDatas] = useState({})
  const [event, setEvent] = useState({})
  const [slide, setSlide] = useState("")
  const ref = useRef("")
  var destState = 0

  const [flag, setFlag] = useState(-1)
  const fovorite = (id) => {
    const url = baseURL + `posts/${id}/like`
    // console.log("fovoriteid: ", id)
    axios.get(url)
      .then(res => {
        console.log(res)
        setFlag(flag * (-1))
      })
      .catch(err => console.log(err))
  }

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
        // console.log(res.data.data[0])
        setEvent(res.data.data[0])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDatas()
    // getEventData()
  }, [flag])

  const onClick = () => {
    fovorite([slide])
  }

  useEffect(() => {
    // setState(destState)
    if (ref.current) {
      console.log(ref.current.splide.index)
    }
  }, [])

  const particlesInit = useCallback(main => {
    loadFull(main)
  }, [])

  return (
    <Container>
      {/* <img src={datas.images_url} /> */}
      {/* <h1>{splide.index}</h1> */}
      {/* <input type="number" value={state} placeholder="num" onChange={e => setState(e.target.value)} /> */}

      <Header />

      <ParticlesDiv>
        <Particles options={particlesOptions} init={particlesInit} />

        <SlidesDiv>
          <Splide
            options={{
              autoplay: true,
              interval: 5000,
              type: 'fade',
              speed: 1000,
              // height: '90vh',
              // perPage: 1,
              rewind: true,
              // direction: 'ttb',
              paginationDirection: 'ttb',
              arrows: false,
              pagination: false,

              start: 2,
            }}

            onMoved={(splide, index, prev, dest) => {
              setSlide(dest+1)
              // console.log(dest, destState)
            }}

            ref={ref}
          >


            {Object.keys(datas).map(key => <Slides key={key} data={datas[key]} onClick={onClick}/>)}
            {/* <EventSlide event={event} /> */}

          </Splide>
        </SlidesDiv>
      </ParticlesDiv>
    </Container>
  )
}
export default Signage

const Container = styled.div`
  height: calc(100vh - 5rem);
  /* aspect-ratio: 9/16; */
  /* width: 56.25vh; */
  background-color: #707070;
  /* FIXME: */
  overflow: scroll;
  font-size: 1.5vh;
`
const ParticlesDiv = styled.div`
  position: relative;
  top: 5vh;
  height: calc(95vh - 5rem);
  box-shadow: 0px 0.5em, 0.5em rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5em 5em;
`
const SlidesDiv = styled.div`
  position: relative;
  z-index:3;
  top: 2rem;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: -94vh;
`