import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'
import { useCallback, useEffect } from "react"
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite';
import buttomImg from '../../image/button.svg'
const Slides = ({ data, onClick }) => {

  useEffect(() => {
    // console.log(data);
  }, [])

  return (
    <SplideSlide>
      <StyledDiv>
        <TitleDiv>
          <Title>
            {data.titles}
          </Title>
        </TitleDiv>
        <CommentDiv>
          <Comment>{data.comments}</Comment>
        </CommentDiv>
        <NicknameDiv>
          <Nickname>おなまえ/{data.nickname}さん</Nickname>
        </NicknameDiv>

        <ImgDiv>
          {data && <Img src={data.images_url} alt="写真" />}
        </ImgDiv>

        <BottomDiv>
          <FovoriteDiv>
            <StyledFavoriteIcon sx={{ "font-size": "1.5em" }} />
            <Like>{data.likeCounts}回<span>いいね！</span>されました</Like>
          </FovoriteDiv>
        </BottomDiv>
      </StyledDiv>
      <Button onClick={()=>onClick()}>
        <img src={buttomImg} />
      </Button>
    </SplideSlide>
  )
}
export default Slides

const StyledDiv = styled.div`
  height: 30rem;
  width: 85%;
  position: relative;
  margin: 0px auto 0px auto;
  background-color: #F4F3F6;
  border-radius: 1rem 1rem 1rem 1rem;
  padding: 1rem;
`
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #E3E3E3;
  white-space: nowrap;
  padding-bottom: 0.8rem;
`
const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
  margin: 0px 0px 0px 0px;
  display: inline;
  position: relative;
  /* top: 8px;
  left: 12px; */
  margin-right: auto;
  color: #333333;
  font-family: 'Zen Kaku Gothic New', sans-serif;
`
const ImgDiv = styled.div`
  position: relative;
  top: 1vh;
  width: 100%;
  height: 15rem;
  margin-bottom: 1em;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const CommentDiv = styled.div`
  /* width: 90%; */
  height: 27%;
  /* margin: 0px auto 0px auto; */
  border-top: 2px solid #E3E3E3;
  position: relative;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`
const Comment = styled.h5`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap');
  font-family: 'Zen Kaku Gothic New', sans-serif;
  margin: 0;
  font-size: 0.75em;
`
const BottomDiv = styled.div`
  display: flex;
  padding-left: 1em;
  height: 5%;
  align-items: flex-end;
`
const NicknameDiv = styled.div`
  display: flex;
`
const Nickname = styled.p`
  /* display: inline; */
  position: relative;
  /* top: 2em; */
  /* display: block; */
  /* float: right; */
  font-size: 0.6em;
  color: #000;
  margin: 0 0 0 auto;
`
const FovoriteDiv = styled.div`
  margin: 0 0 0 auto;
  font-size: 0.6em;
`
const StyledFavoriteIcon = styled(FavoriteIcon)`
  /* font-size: 1em; */
  color: #F06CAA;
`
const Like = styled.h4`
  margin: 0;
  position: relative;
  display: inline;
  vertical-align: top;
  font-size: 1em;
  /* bottom: 2vh; */
  /* float: right; */
  span{
    color: #F06CAA;
  }
`
const Button = styled.div`
  width: 100vw;
  display: flex;
  img{
    width: 9rem;
    object-fit: contain;
    margin: 0.5rem 2rem 0rem auto;
  }
`



