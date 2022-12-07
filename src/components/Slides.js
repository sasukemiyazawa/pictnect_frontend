import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import { useEffect } from "react"
import styled from "styled-components"
const Slides = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [])
  return (
    <SplideSlide>
      <Container>
        <StyledH3>みんなの写真</StyledH3>
        <StyledDiv>
          <TitleDiv>
            <Title>「{data.titles}」
            </Title>
          </TitleDiv>
          <ImgDiv>
            {data && <Img src={data.images_url} alt="写真" />}
          </ImgDiv>
          <CommentDiv>
            <Comment>{data.comments}</Comment>
          </CommentDiv>
        </StyledDiv>
      </Container>
    </SplideSlide>
  )
}
export default Slides

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #A1B1CA;
  /* border-radius: 0px 0px 5vw 5vw;  */
`
const StyledDiv = styled.div`
  height: 85%;
  width: 85%;
  position: relative;
  top: 5vh;
  margin: 0px auto 0px auto;
  background-color: #F4F3F6;
  border-radius: 10px 10px 20px 20px;
  padding: 0.5rem;
`

const StyledH3 = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
  color: #5D8EDA;
  margin: 0px 0px 0px 0px;
  position: relative;
  top: 23px;
  left: 29px;
  font-family: 'Zen Kaku Gothic New', sans-serif; 
`

const TitleDiv = styled.div`
  height: 3rem;
  border-bottom: 2px solid #E3E3E3;
  white-space: nowrap;
`

const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
  margin: 0px 0px 0px 0px;
  display: inline;
  position: relative;
  top: 8px;
  left: 12px;
  color: #333333;
  font-family: 'Zen Kaku Gothic New', sans-serif;
`

const Nickname = styled.h6`
  display: inline;
  position: relative;
  top: 2rem;
  /* display: block; */
  float: right;
  margin: 0px 5px 0px auto;
`

const CommentDiv = styled.div`
  width: 100%;
  height: 30%;
  /* margin: 0px auto 0px auto; */
  border-top: 2px solid #E3E3E3;
  position: relative;
  top: 1rem;
`

const Comment = styled.h5`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
  font-family: 'Zen Kaku Gothic New', sans-serif;
  margin: 0;
`

const ImgDiv = styled.div`
  position: relative;
  top: 3vh;
  width: 100%;
  height: 37vh;
  margin-bottom: 1rem;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const Like = styled.h4`
  position: relative;
  bottom: 2vh;
  float: right;
`