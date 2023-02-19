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
    const url = `${baseURL}events/6`
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
    <NowDiv>
      <Img src={event.image_url} />
      <Container>

        <Typography sx={{ fontFamily: "Noto Sans JP", fontWeight: "Bold", fontSize: "1.2em" }} color="subtitle1.main">
          {event.eventname}
        </Typography>

        <TagDiv>
          <Grid container spacing={1.5}>
            <Grid item xs={4}>
              <Button variant="text" color="info" sx={{ padding: "0px", border: 2, borderRadius: '1em', borderColor: 'secondary.main', width: '100%' }} >
                <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'bold', fontSize: "0.8em" }}>{tagDatas}</Typography>
              </Button>
            </Grid>
          </Grid>
        </TagDiv>
        <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'regular' }}>
          {event.contents}
        </Typography>
      </Container>


    </NowDiv>
  )
}
export default Now
const NowDiv = styled.div`
  padding-bottom: 5em;
`
const Img = styled.img`
  width: 100%;
  height: 46vh;
  object-fit: cover;
`
const TagDiv = styled.div`
/* margin: 0.5em; */
  width: 100%;
/* margin-left: 1em; */
  margin-top: 0.8em;
  margin-bottom: 0.8em;
`
const Container = styled.div`
  padding: 1em;
`