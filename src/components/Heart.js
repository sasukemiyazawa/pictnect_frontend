/*
FIXME: バグだらけ
*/

import Lottie from "lottie-react"
import { useEffect, useRef, useState } from "react"
import hearts from "./hearts2.json"
const Heart = ({on}) => {
  const lottieRef = useRef()
  const style = {
    height: "98vh",
    width: "56.25vh",
    position: "absolute",
    top: "0px",
    zIndex: "100",
    color: "#F06CAA"
  }
  useEffect(() => {
    if (on) {
      lottieRef.current.play()
    } else {
      lottieRef.current.stop()
    }
  }, [on])
  return (
    <>
      <Lottie
        animationData={hearts}
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
        style={style}
      />
      {/* <button onClick={() => {
        setOn((prev) => !prev)
      }}>スタート</button> */}
    </>)
}
export default Heart