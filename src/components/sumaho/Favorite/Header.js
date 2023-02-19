import { AppBar } from "@mui/material"
import styled from "styled-components"
import logo from '../../image/logo.svg'

const Header = () => {
  return (
    <>
    <AppBar sx={{backgroundColor: 'white', boxShadow: 'none'}}><Img src={logo}/></AppBar>
    </>
  )
}
export default Header
const Img = styled.img`
  height: 5vh;
`