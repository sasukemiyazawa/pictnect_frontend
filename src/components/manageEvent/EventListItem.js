const EventListItem = ({data, handler}) => {
    return(
        <>
        <img src={data.image_url} alt='' key={data.id} onClick={()=>handler(data.id)}/>
        {data.id}
        </>
    )
}

export default EventListItem