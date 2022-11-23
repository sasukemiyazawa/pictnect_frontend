const EventListItem = ({data, handler}) => {

    //ハンドラ関数（EventPageコンポーネントのdisplayEventIdステートの変更用）を受け取りクリック時に実行
    return(
        <>
        <img src={data.image_url} alt='' key={data.id} onClick={()=>handler(data.id)}/>
        {data.id}
        </>
    )
}

export default EventListItem