import anime1 from './image/yukidaruma1.png'
import anime2 from './image/yukidaruma2.png'
import anime3 from './image/yukidaruma3.png'
import anime4 from './image/yukidaruma4.png'
import anime5 from './image/yukidaruma5.png'
import anime6 from './image/yukidaruma6.png'
import anime7 from './image/yukidaruma7.png'
import anime8 from './image/yukidaruma8.png'
import anime9 from './image/yukidaruma9.png'
import anime10 from './image/yukidaruma10.png'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import styled from 'styled-components'

const Anime = () => {
  const anime = [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9, anime10]
  return (
    <Splide
      options={{
        type: 'fade',
        autoplay: 'true',
        interval:3000,
        rewind: true,
        arrows: false,
        width: '56.25vh',
        pagination: false,
        speed: 1000
      }}>
      {Object.keys(anime).map((key) => (
      <SplideSlide key={key}>
        <Img src={anime[key]} />
      </SplideSlide>
      ))}
    </Splide>
  )
}
export default Anime
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`