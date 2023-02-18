import styled from "styled-components"
const Header = () => {
    return (
        <StyledHeader>
            <TimeDiv>
                <Date>2022年12月12日</Date>
                <Time>12<span>:</span>34</Time>
            </TimeDiv>
            <CommentDiv>
                <StyledP>先生からのコメント:</StyledP>
                <Comment>今日も元気にいきましょう</Comment>
            </CommentDiv>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    width: 100%;
    height: 7%;
    background-color: #525457;
    box-shadow: 0px 4px 4px rgb(51 51 51 / 30%);
    position: relative;
    z-index: 1;
    display: flex;
`
const StyledP = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@700&display=swap');
    font-size: 0.6rem;
    margin: 0px;
    color: #666666;
    font-weight: bold;
    position: relative;
    top: 0.5rem;
    left: 0.5rem;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    width: 10rem;
`

const CommentDiv = styled.div`
    width: 75%;
    height: 90%;
    margin: 0 0 auto auto;
    background-color: #F0F0F0;
    border-radius: 0px 0px 0px 8px;
    /* position: relative; */
    /* top: -90%; */
`
const Comment = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap');
    margin: 0px;
    text-align: left;
    font-size: 1rem;
    color: #333333;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    margin-top: 0.5rem; 
    margin-left: 1rem;
`
const Time = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
    margin:0px;
    position: relative;
    color: #F4F3F6;
    text-align: center;
    top: 0.4rem;
    font-family: 'Roboto Condensed', sans-serif;
    span {
        animation: flash 1s linear infinite;
    }
    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
`

const TimeDiv = styled.div`
    width: 25%;
`
const Date = styled.h5`
    margin:0;
    color: #F4F3F6;
    font-size: 0.5rem;
    text-align: center;
    position: relative;
    top: 0.7rem;
`