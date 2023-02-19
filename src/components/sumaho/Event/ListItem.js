import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ListItem = ({ event, setTransition, setEId }) => {
	const navigate = useNavigate()
	return (
		<>
			{/* <Button onClick={()=>navigate(`/sumaho/event/${event.id}`)} > */}
			<Button onClick={() => {
				setTransition(true)
				setEId(event.id)
			}} >
				<Img src={event.image_url} />
				<Div>
					<Typography sx={{ fontFamily: "Zenkaku Gothic New", fontWeight: "Bold", m: "1em", fontSize: "1em"}} color="info.main">
						{event.eventname}
					</Typography>
					<FavDiv>
						<FavoriteIcon sx={{ fontSize: '0.7em', mt: '0.3em' }} color="secondary" />
						1111
					</FavDiv>
				</Div>

				<ArrowForwardIosIcon sx={{ margin: "auto", mr: 0 }} color='#666666' />
			</Button>
		</>
	)
}
export default ListItem

const Button = styled.button`
  width: 90%;
  height: 5em;
	margin-left: auto;
	margin-right: auto;
	margin: 1em;
	background-color: #ffffff;
	border: none;
	display: flex;
`
const Img = styled.img`
	position: relative;
	height: 5em;
	width: 4em;
	object-fit: cover;
	border-radius: 0.5em 0.5em 0.5em 0.5em;
`
const Div = styled.div`
	flex-flow:column;
	height: 5em;
`
const FavDiv = styled.div`
	display: flex;
	padding-left: 1em;
`