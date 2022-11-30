import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import img from "./logo192.png"
const EventSlide = () => {
    return(
        <SplideSlide>
        <img src={img} alt="写真"/>
        </SplideSlide>
    )
}
export default EventSlide