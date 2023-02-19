/*TODO: PICKUP写真のアイコンと文字追加
        PICKUP写真のスライド化
        import文の整理
*/
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, IconButton, InputBase, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import styled from "styled-components"
import Tag from "./Tag"
import { Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"
const Search = ({ baseURL }) => {

    const [image, setImgae] = useState({})
    const [tagDatas, setTagDatas] = useState([])
    const url = baseURL + 'posts'
    const url2 = baseURL + 'tags'

    const navigate = useNavigate()

    const getImage = () => {
        axios.get(url)
            .then(res => {
                // console.log(res)
                setImgae(res.data.data[1].images_url)
            })
            .catch(err => console.log(err))
    }
    const getTagDatas = () => {
        axios.get(url2)
            .then(res => {
                console.log(res)
                setTagDatas(res.data.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getImage()
        getTagDatas()
        // 以下のコメントはwarningを消すため
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Div>
            <SearchField>
                {/* FIXME: プレイスホルダーのスタイルの変更 or ボタンとして修正 */}
                <StyledInput placeholder="名前で検索" sx={{ flex: 1 }} />
                <IconButton type="button">
                    <SearchIcon />
                </IconButton>
            </SearchField>
            {image && <Img src={image} />}
            <Container>
                <TypoDiv>
                    <Typography sx={{ fontFamily: 'Noto Sans JP', fontWeight: 'bold', marginBottom: '0.5rem' }} color="subtitle1.main">タグで検索</Typography>
                </TypoDiv>
                <StyledTypo sx={{ fontFamily: 'Noto Sans JP', fontWeight: 'bold', marginTop: '0.5rem', fontSize: '0.8rem' }} color="subtitle1.main">よく使われているタグ</StyledTypo>
                <TagDiv>
                    <Grid container spacing={1.5}>
                        {Object.keys(tagDatas).slice(0, 8).map(key => <Tag key={key} data={tagDatas[key]} />)}
                    </Grid>
                </TagDiv>
                {/* FIXME: イベントタグを本物にする */}
                <StyledTypo sx={{ fontFamily: 'Noto Sans JP', fontWeight: 'bold', marginTop: '2.5rem', fontSize: '0.8rem' }} color="subtitle1.main">イベントタグ</StyledTypo>
                <TagDiv>
                    <Grid container spacing={1.5}>
                        {Object.keys(tagDatas).slice(0, 8).map(key => <Tag key={key} data={tagDatas[key]} />)}
                    </Grid>
                </TagDiv>
                {/* FIXME: ボタンの見た目をもっとfigmaに近づける努力 */}
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        fontFamily: 'Noto Sans JP',
                        fontWeight: 'bold',
                        display: 'flex',
                        mr: 0,
                        ml: 'auto',
                        mt: '2rem'
                    }}
                    size="large"
                    onClick={() => navigate("/sumaho/post")}

                >写真投稿</Button>
            </Container>
        </Div>
    )
}
export default Search
const Div = styled.div`
    height: calc(100% - 5rem);
    overflow: scroll;
`
const Container = styled.div`
    padding: 1.5rem;
`
const SearchField = styled.div`
    display: flex;
    height: 1.5rem;
    margin: 1.5rem;
    background-color: #E4E4E4;
`
const Img = styled.img`
    height: 30vh;
    width: 100%;
    position: relative;
    object-fit: cover;
`
const StyledInput = styled(InputBase).attrs({
    placeholdertextcolor: "red"
})`
    ::placeholder,
  ::-webkit-input-placeholder {
    color: red;
  }
  :-ms-input-placeholder {
     color: red;
  }
`
const TypoDiv = styled.div`
    border-bottom: solid #CDCDCD 2px;
`
const TagDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`
const StyledTypo = styled(Typography)`
    position: relative;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`