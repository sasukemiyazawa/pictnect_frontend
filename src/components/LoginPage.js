import React, {useState} from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import logoicon from './image/pictnect_logo.png'
import { Stack } from "@mui/system"
import ManageSplash from "./ManageSplash"

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const login = () => {
    setIsLoading(true)
    setTimeout(()=>navigate('/manager'), 2000)

  }

  return (
    <div>
      { isLoading && <ManageSplash/>}
      <Grid>
        <Paper elevation={3} sx={{ p: 4, height: "70vh", width: "280px", m: "20px auto"}} >
          <Grid container direction="column" justifyContent="flex-start" alignItems="center">
            <LogoIcon src={logoicon} />
            <Typography variant={"h5"} sx={{ m: "30px" }}>管理画面ログイン</Typography>
          </Grid>
          <Stack spacing={3}>
            <TextField label="Username" variant="standard" fullWidth required />
            <TextField type="password" label="Password" variant="standard" fullWidth required/>
            <Button type="submit" color="primary" variant="contained" fullWidth onClick={()=>login()}>ログイン</Button>
          </Stack>
        </Paper>
      </Grid>
    </div>
  )
}

export default LoginPage

const LogoIcon = styled.img`
  height: 60px;
  width: fit-content;
`