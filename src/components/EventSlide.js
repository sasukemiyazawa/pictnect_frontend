import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import { useEffect } from "react"
const EventSlide = ({ event }) => {
    useEffect(() => {
        // console.log(event)

    }, [])
    return (
        <SplideSlide>
            {event && <img src={event.image_url} alt="写真" />}
        </SplideSlide>
    )
}
export default EventSlide