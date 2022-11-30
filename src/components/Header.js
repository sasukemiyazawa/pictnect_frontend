import styled from "styled-components"
const Header = () => {
    return (
        <StyledHeader>
        <CommentDiv></CommentDiv>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    width: 100%;
    height: 7%;
    background-color: #B5C97C;
`

const CommentDiv = styled.div`
    width: 70%;
    height: 90%;
    margin: 0 0 auto auto;
    background-color: #f0f0f0;
`