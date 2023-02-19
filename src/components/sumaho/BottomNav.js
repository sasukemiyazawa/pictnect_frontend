/*
TODO:
影をつけましょう
フッターの光る場所変わるバグ
*/
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Splash from "./Splash"
import { useSpring, animated, useSpringRef } from '@react-spring/web';

const BottomNav = () => {
  const [splash, setSplash] = useState(true)
  const fadeinRef = useSpringRef()
  const fadein = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    ref: fadeinRef
  })

  useEffect(() => {
    if(!splash) fadeinRef.start()
  }, [splash])

  const [value, setValue] = useState(0)
  return (
    <>
      {splash && <Splash setSplash={setSplash} />}
      <>
        <animated.div style={fadein}>
          <Outlet />
          <Container>
            <BottomNavigation
              value={value}
              showLabels
              onChange={(e, newValue) => {
                setValue(newValue)
                // console.log(value)
              }}
            >
              <BottomNavigationAction label="いいね" icon={<FavoriteIcon />} component={Link} to={""} />
              <BottomNavigationAction label="さがす" icon={<SearchIcon />} component={Link} to={"search"} />
              <BottomNavigationAction label="イベント" icon={<EventAvailableIcon />} component={Link} to={"event"} />
            </BottomNavigation>
          </Container>
        </animated.div>
      </>
    </>
  )
}

export default BottomNav

const Container = styled.div`
    /* position: absolute; */
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 5rem;
    background-color: white;
`