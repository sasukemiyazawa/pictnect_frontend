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
			<Button onClick={()=>{
				setTransition(true)
				setEId(event.id)
				}} >
				<Img src={event.image_url} />
				<Div>
					<Typography sx={{ fontFamily: "Zenkaku Gothic New", fontWeight: "Bold", m: "1rem" }} color="info.main">
						{event.eventname}
					</Typography>

					<FavoriteIcon sx={{ fontSize: '0.7rem', mt: '-0.2rem' }} color="secondary" />
					1111
				</Div>
				<ArrowForwardIosIcon sx={{margin: "auto", mr: 0}} color='#666666' />
			</Button>
		</>
	)
}
export default ListItem

const Button = styled.button`
  width: 90%;
  height: 5rem;
	margin-left: auto;
	margin-right: auto;
	margin: 1rem;
	background-color: #ffffff;
	border: none;
	display: flex;
`
const Img = styled.img`
	position: relative;
	height: 5rem;
	width: 4rem;
	object-fit: cover;
	border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
`
const Div = styled.div`
	flex-flow:column;
`