import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import PostModal from './PostModal'

const Homepage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/posts')
        .then((res) =>{
            setPosts(res.data)
        })
        .catch((error) => console.log(error))
    }, [])
  return (
    <>
    <div className="max-w-[960px] mt-0 mx-auto p-4 grid grid-cols-3 gap-2">
        {
           posts.map((post) => (
            <Card key={post._id} posts={post} />
           ))
        }
    </div>
    <PostModal />
    </>
  )
}
export default Homepage
