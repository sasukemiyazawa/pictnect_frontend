const EventListItem = ({data, handler}) => {

    //ハンドラ関数（EventPageコンポーネントのdisplayEventIdステートの変更用）を受け取りクリック時に実行
    return(
        <>
        <br/>
        <img src={data.image_url} alt='' key={data.id} onClick={()=>handler(data.id)}/>
        {data.id}
        <br/>
        </>
    )
}

export default EventListItem