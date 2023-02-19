import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import { useCallback, useEffect } from "react"
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
const Slides = ({ data }) => {

  useEffect(() => {
    // console.log(data);
  }, [])

  return (
    <SplideSlide>
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
        <BottomDiv>
          <Nickname>おなまえ/{data.nickname}さん</Nickname>
          <FovoriteDiv>
          <StyledFavoriteIcon sx={{"font-size": "1.5rem"}}/>
          <Like>{data.likeCounts}回<span>いいね！</span>されました</Like> </FovoriteDiv>
        </BottomDiv>
      </StyledDiv>
    </SplideSlide>
  )
}
export default Slides

const StyledDiv = styled.div`
  height: 80%;
  width: 85%;
  position: relative;
  top: 7vh;
  margin: 0px auto 0px auto;
  background-color: #F4F3F6;
  border-radius: 10px 10px 20px 20px;
  padding: 0.5rem;
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
const ImgDiv = styled.div`
  position: relative;
  top: 1vh;
  width: 100%;
  height: 37vh;
  margin-bottom: 1rem;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const CommentDiv = styled.div`
  width: 90%;
  height: 27%;
  /* margin: 0px auto 0px auto; */
  border-top: 2px solid #E3E3E3;
  position: relative;
  padding: 0.6rem;
`
const Comment = styled.h5`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap');
  font-family: 'Zen Kaku Gothic New', sans-serif;
  margin: 0;
  font-size: 0.75rem;
`
const BottomDiv = styled.div`
  display: flex;
  padding-left: 1rem;
  height: 5%;
  align-items: flex-end;
`
const Nickname = styled.h6`
  /* display: inline; */
  position: relative;
  /* top: 2rem; */
  /* display: block; */
  /* float: right; */
  font-size: 0.6rem;
  margin: 0 0  0.3rem 0;
`
const FovoriteDiv = styled.div`
  margin: 0 0 0 auto;
  font-size: 0.6rem;
`
const StyledFavoriteIcon = styled(FavoriteIcon)`
  /* font-size: 1rem; */
  color: #F06CAA;
`
const Like = styled.h4`
  margin: 0;
  position: relative;
  display: inline;
  vertical-align: top;
  font-size: 1rem;
  /* bottom: 2vh; */
  /* float: right; */
  span{
    color: #F06CAA;
  }
`



