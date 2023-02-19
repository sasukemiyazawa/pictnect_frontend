import axios from "axios"
import { useEffect, useState } from "react"

//データの受信コンポーネント
const Getdata = ({ baseURL }) => {

  //画像の保存用State
  const [image, setImage] = useState("")
  //イベントハンドラ用State
  const [num, setNum] = useState(1)

  //データの受信
  const getData = (num) => {
    const url = baseURL + 'posts'
    axios.get(url)
      .then(res => {
        // console.log(res)
        setImage(res.data.data[num].images_url)
      })
      .catch(err => console.log(err))
  }

  //最初に一度呼ばれる
  useEffect(() => {
    getData(num)
  }, [])

  return (
    <>
      <input type="number" value={num} placeholder="num" onChange={e => setNum(e.target.value)} />
      postsデータの{num}番目、画像を表示します
      {image && <img src={image} />}
      <button onClick={getData(num)}>ボタン</button>
      {num}
    </>
  )
}

export default Getdata