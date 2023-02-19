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
import { useKey } from "rooks"
import Heart from "./Heart"
import Anime from "./Anime"

const Signage = ({ baseURL }) => {

  const [on, setOn] = useState(false)

  const [datas, setDatas] = useState([{ id: 100 }])
  const [event, setEvent] = useState({})
  const [slide, setSlide] = useState(-1)
  const ref = useRef("")
  var destState = 0

  //FIXME: いいねがおされた時の挙動、やや雑
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
        console.log(res)
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

  const [firstAction, setFirstAction] = useState(false)
  let intervalId
  useEffect(() => {
    if (!firstAction) {
      intervalId = setInterval(() => {
        ref.current.splide.go('>')
        setFirstAction(true)
      }, 15000);
    } else {
      clearInterval(intervalId)
      console.log("cleared")
    }
  }, [firstAction])

  // const [bFlag, setBFlag] = useState(false)
  const enterKeyHandler = () => {
    console.log("id:", datas[slide].id)
    fovorite(datas[slide].id)
    setOn((prev) => !prev)
    console.log(on)
  }
  useKey('Enter', enterKeyHandler)

  const particlesInit = useCallback(main => {
    loadFull(main)
  }, [])

  return (
    <>

      <Container>

        <Header />

        <ParticlesDiv>
          <Particles options={particlesOptions} init={particlesInit} />
          <StyledH3>みんなの写真</StyledH3>
          <SlidesDiv>
            <Splide
              options={{
                autoplay: true,
                interval: 15000,
                type: 'fade',
                speed: 1000,
                height: '90vh',
                // perPage: 1,
                rewind: true,
                // direction: 'ttb',
                paginationDirection: 'ttb',
                arrows: false,
                pagination: false,
                start: 2,
              }}
              onMoved={(splide, index, prev, dest) => {
                // if (dest === 10) {
                //   // destState = 2
                //   // console.log(setSlide)
                //   // setSlide(2)
                // }
                // else {
                //   destState = 1
                //   setSlide(1)
                // }
                // console.log(dest, destState)
                setSlide(dest)
              }}
              ref={ref}
            >
              {Object.keys(datas).map(key => <Slides key={key} data={datas[key]} />)}
            </Splide>
          </SlidesDiv>
          <AnimeDiv>
            <Anime />
          </AnimeDiv>
        </ParticlesDiv>
        {on && <Heart on={on} />}


      </Container>
    </>

  )
}
export default Signage

const Container = styled.div`
  height: 100vh;
  /* aspect-ratio: 9/16; */
  width: 56.25vh;
  background-color: #707070;

  font-size: 2vh;
`
const NextSlide = styled.div`
  width: 100%;
  height: 97.5%;
  position: absolute;
  top: 0px;
  border-radius: 0px 0px 2rem 2rem;
  background-color: 
  ${({ state }) => state === 1
    ? "#8AAADB"
    : "#8AAADB"
  };
`
const NNextSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  border-radius: 0px 0px 2rem 2rem;
  background-color: 
  ${({ state }) => state === 1
    ? "#5D8EDA"
    : "#5D8EDA"
  };
`
const ParticlesDiv = styled.div`
  position: relative;
  height: 93vh;
  box-shadow: 0px 0.5rem, 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5rem 5rem;
`
const SlidesDiv = styled.div`
  position: relative;
  z-index:3;
`
const StyledH3 = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
  color: #5D8EDA;
  margin: 0px 0px 0px 0px;
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-family: 'Zen Kaku Gothic New', sans-serif; 
  z-index: 3;
  font-size: 1.5rem;
  text-shadow: 
            3px 3px 3px white, -3px -3px 3px white,
           -3px 3px 3px white,  3px -3px 3px white,
            3px 0px 3px white, -3px -0px 3px white,
            0px 3px 3px white,  0px -3px 3px white;
`
const AnimeDiv = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 0px;
`