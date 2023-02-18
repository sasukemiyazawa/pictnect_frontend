import axios from "axios"
import { useState } from "react"
import { useCallback } from "react"

//データの送信コンポーネント
const Senddata = ({ baseURL }) => {

  //保存用State
  const [nickname, setNickname] = useState("")
  const [comment, setComment] = useState("")
  const [title, setTitle] = useState("")
   const [image, setImage] = useState('')
  const selectImage = useCallback((e) => {
    const selectImage = e.target.files[0]
    setImage(selectImage)
  }, [])

  //送信データ作成
  const createFormData = () => {
    const formData = new FormData()
    formData.append('nickname', nickname)
    formData.append('comments', comment)
    formData.append('images', image)

    formData.append('titles', title)
    formData.append('tags', "tag1")
    return formData
  }

  //投稿
  const sendFormData = async() => {
    const url = baseURL + 'posts'
    const data = await createFormData()
    const config = {
      headers: {}//ヘッダーは空にしないとエラーになる
    }
    axios.post(url, data, config) .then(res => {
        // console.log(res);
        alert("投稿に成功しました！")
      })
      .catch(err => {
        alert("エラーが発生しました")
      })
  }



  return (
    <>
      <input type="text" placeholder="ニックネーム" onChange={e => setNickname(e.target.value)} />
      <input type="file" onChange={e => selectImage(e)} />
      <input type="text" placeholder="タイトル" onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="コメント" onChange={e => setComment(e.target.value)} />
      
      <button onClick={sendFormData}>ボタン</button>
    </>
  )
}

export default Senddata