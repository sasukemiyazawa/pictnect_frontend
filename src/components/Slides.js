import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import { useEffect } from "react"
const Slides = ({data}) => {
  useEffect(()=>{
    // console.log(data);
  },[])
    return(
        <SplideSlide>
          {data && <img src={data.images_url} />}
        </SplideSlide>
    )
}
export default Slides