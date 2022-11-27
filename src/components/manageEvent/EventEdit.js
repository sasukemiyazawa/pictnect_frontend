import { useState } from 'react'
import { useCallback } from "react"
import axios from 'axios'
import Button from '@mui/material/Button'

const EventEdit = ({ baseURL, id }) => {
  const [eventname, setEventname] = useState('')
  const [contents, setContents] = useState('')
  const [term, setTerm] = useState(0)
  // const [tag, setTag] = useState('')
  // const [tags, setTags] = useState([])

  const [image, setImage] = useState('')
  const selectImage = useCallback((e) => {
    const selectImage = e.target.files[0]
    setImage(selectImage)
  }, [])

  // const addTag = () => {
  //     tags.push(tag)
  //     const tmp = new Set(tags)
  //     setTags(Array.from(tmp))
  // }

  // const deleteTag = (value) => {
  //     setTags(tags.filter((tags, index) => {
  //         return (tags !== value)
  //     }))
  // }

  const createFormData = () => {
    const formData = new FormData()
    if (eventname !== '') formData.append('eventname', eventname)
    if (contents !== '') formData.append('contents', contents)
    if (term !== 0) formData.append('term', term)
    if (image !== '') formData.append('image', image)
    // tags.forEach((tag) =>{
    //     formData.append('tags[]', tag)
    // })
    console.log(formData)
    return formData
  }

  const sendFormData = async () => {
    const data = await createFormData()
    await axios.patch(baseURL + '/events/' + id, data, { headers: {} })
      .then(res => {
        console.log(res);
        alert("投稿に成功しました！")
      })
      .catch(err => {
        alert("エラーが発生しました")
      })
  }

  return (
    <div>
      <input type="text" placeholder="イベント名" onChange={e => setEventname(e.target.value)} />
      <input type="text" placeholder="内容" onChange={e => setContents(e.target.value)} />
      <input type="text" placeholder="期間" onChange={e => setTerm(e.target.value)} />
      <input type="file" onChange={e => selectImage(e)} />
      {/* <input type="text" placeholder="タグ" onChange={e => setTag(e.target.value)} />
            <button onClick={addTag}>タグ追加</button>
            {tags.map((value, index) => {
                return(
                    <input type="text" value={value} readOnly onClick={() => deleteTag(value)} key = {index}/>
                )
            })} */}

      <Button variant="contained" onClick={sendFormData}>イベント編集</Button>
    </div>
  )
}

export default EventEdit