import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"

/*FIXME: タグのところ(<Grid>)適当に作ってしまった。。。 
イベントに関連するタグはいくつ？
*/

const Now = ({ baseURL }) => {
  const [event, setEvent] = useState({})
  const [tagDatas, setTagDatas] = useState([])
  const getEvent = () => {
    const url = `${baseURL}events/4`
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setEvent(res.data.data)
        setTagDatas(res.data.tags)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Img src={event.image_url} />
      <Container>

        <Typography sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", fontSize: "1.2rem" }} color="subtitle1.main">
          {event.eventname}
        </Typography>

        <TagDiv>
          <Grid container spacing={1.5}>
            <Grid item xs={4}>
              <Button variant="text" color="info" sx={{ padding: "0px", border: 2, borderRadius: '1rem', borderColor: 'secondary.main', width: '100%' }} >
                <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'bold', fontSize: "0.8rem" }}>{tagDatas}</Typography>
              </Button>
            </Grid>
          </Grid>
        </TagDiv>
        <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'regular' }}>
          {event.contents}
        </Typography>
      </Container>


    </>
  )
}
export default Now

const Img = styled.img`
  width: 100%;
  height: 46vh;
  object-fit: cover;
`
const TagDiv = styled.div`
/* margin: 0.5rem; */
  width: 100%;
/* margin-left: 1rem; */
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`
const Container = styled.div`
  padding: 1rem;
`