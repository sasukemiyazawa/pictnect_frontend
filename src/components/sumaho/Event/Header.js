import { Button, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"
import List from './List'
import Now from "./Now"

/*
FIXME: スタイル変更
*/
const Header = ({ baseURL }) => {

  const [value, setValue] = useState(0)
  const hundleChange = (e, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Container>
      <Title>
        <Typography sx={{ fontFamily: "Noto Sans JP", color: "#333333", mt: '1.5rem', fontWeight: 'Bold', textAlign: "center" }}>
      {value 
      ? "イベント一覧"
      : "現在開催中のイベント"}
        </Typography>
      </Title>
      <Head>
        
        {/* boxShadow: "0px 2px 0px rgb(0 0 0 / 25%)" */}
        <Tabs value={value} onChange={hundleChange} sx={{width: "100vw"}}>
          <Tab label="開催中" {...a11yProps(0)} sx={{flex: 1}}/>
          <Tab label="一覧" {...a11yProps(1)} sx={{flex: 1}}/>
        </Tabs>
      </Head>

      {value 
      ? <List value={value} index={1} baseURL={baseURL} />
      : <Now value={value} index={0} baseURL={baseURL} />}
      {/* <Outlet /> */}
    </Container>

  )
}
export default Header
const Title = styled.div`

`
const Head = styled.div`
  display: flex;
  height: 3rem;
  margin-bottom: 1rem;
`
const Container = styled.div`
  width: 100%;
  height: calc(100%-5rem);
`