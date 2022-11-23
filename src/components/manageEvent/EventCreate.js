import { useState } from 'react'
import { useCallback } from "react"
import axios from 'axios'

const EventCreate = ({baseURL}) => {
    const [eventname, setEventname] = useState('')
    const [contents, setContents] = useState('')
    const [term, setTerm] = useState(0)
    const [tags, setTags] = useState()

    //画像入力部分
    const [image, setImage] = useState('')
    const selectImage = useCallback((e) => {
        const selectImage = e.target.files[0]
        setImage(selectImage)
    }, [])

    //送信用データの作成
    const createFormData = () => {
        const formData = new FormData()
        formData.append('eventname', eventname)
        formData.append('contents', contents)
        formData.append('term', term)
        formData.append('image', image)
        formData.append('tags', tags)
        return formData
    }

    //バックエンドへのデータの送信
    const sendFormData = async() => {
        const data = await createFormData()
        await axios.post(baseURL + '/events', data, {headers: {}})
        .then(res => {
            console.log(res);
            alert("投稿に成功しました！")
            })
          .catch(err => {
            alert("エラーが発生しました")
            })
    }

    return(
        <>
            <input type="text" placeholder="イベント名" onChange={e => setEventname(e.target.value)} />
            <input type="text" placeholder="内容" onChange={e => setContents(e.target.value)} />
            <input type="text" placeholder="期間" onChange={e => setTerm(e.target.value)} />
            <input type="file" onChange={e => selectImage(e)} />
            <input type="text" placeholder="タグ" onChange={e => setTags(e.target.value)} />

            <button onClick={sendFormData}>イベント作成</button>
        </>
    )
}

export default EventCreate