import above from "./image/manage_above.svg"
import below from "./image/manage_below.svg"
import logoicon from "./image/pictnect_logo.png"
import textManage from "./image/management.svg"
import typo from "./image/pictnect_logotype.png"
import styled from "styled-components"

function ManageSplash(){
  return(
    <Ground>
      <Above src={above}/>
      <Below src={below}/>
      <LogoBox>
        <LogoIcon src={logoicon}/>
        <LogoText src={typo}/>
        <LogoTextManage src={textManage}/>
      </LogoBox>
    </Ground>    
  )
}

export default ManageSplash

const Ground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255,255,255,1);
  position: fixed;
  z-index:  10000;
  top: 0;
`

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  inset: 0;
  position: fixed;
  margin: auto;
`

const LogoIcon = styled.img`
  height: 170px;
  inset: 0;
  margin: auto;
  width: auto;
`

const LogoText = styled.img`
  height: 40px;
  inset: 0;
  margin: auto;
  width: auto;
`

const LogoTextManage = styled.img`
  height: 20px;
  inset: 0;
  margin: auto;
  width: auto;
`

const Above = styled.img`
  top: 10%;
  left: 10%;
`

const Below = styled.img`
  bottom: 0%;
  right: 0%;
  position: fixed;
`