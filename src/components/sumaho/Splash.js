import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpring, useSpringRef, useChain } from '@react-spring/web'
import { useNavigate } from 'react-router-dom'
import pink from '../image/pink.svg'
import green from '../image/green.svg'
import logo from '../image/logo.svg'
import pictnect from '../image/pictnect.svg'
import styled from 'styled-components'

export default function Splash({ setSplash }) {

  const navigate = useNavigate()

  const ref1 = useSpringRef()
  const style1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    onRest: (_a, _b, item) => {
      console.log("a")
    },
    ref: ref1
  })
  const ref2 = useSpringRef()
  const style2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    onRest: (_a, _b, item) => {
      console.log("b")
    },
    ref: ref2
  })
  const ref3 = useSpringRef()
  const style3 = useSpring({
    from: { opacity: 1, scale: 1 },
    to: { opacity: 0, scale: 5 },
    config: { duration: 2000 },
    onRest: (_a, _b, item) => {
      console.log("c")
      // navigate("/sumaho/favorite")
      setSplash(false)
    },
    ref: ref3
  })

  useChain([ref1, ref2, ref3])
  return (
    <div>
      <animated.div style={style3}>
        <Container>
          <animated.div style={style1}><Component1 /></animated.div>
          <animated.div style={style2}><Component2 /></animated.div>
        </Container>
      </animated.div>
    </div>
  )
}
const Component1 = () => {
  return (
    <>
      <Pink src={pink} />
      <Green src={green} />
    </>
  )
}
const Component2 = () => {
  return (
    <>
      <Logo src={logo} />
      <Pictnect src={pictnect} />
    </>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const Pink = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
`
const Green = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
`
const Logo = styled.img`  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Pictnect = styled.img`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`