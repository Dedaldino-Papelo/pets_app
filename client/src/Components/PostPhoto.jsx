import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/post/postSlice'

const PostPhoto = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userReducer = useSelector((state) =>state.userReducer)
  const {users} = userReducer

  const HandleSubmit = async(e) => {
    e.preventDefault()
    try {
      await dispatch(createPost({
        name, 
        image, 
        description,
        userId: users._id
      })).unwrap()
      navigate('/')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center flex-col justify-center'>
      <h1 className='text-3xl font-bold text-violet-500 mb-4'>Post Your Photo</h1>
      <form onSubmit={HandleSubmit} className='flex flex-col gap-2 w-96'>
       <label className=''>
          <p>Name</p>
          <input type='text'
            onChange={(e) => setName(e.target.value)} 
              placeholder='Name' 
                className='bg-slate-200 w-full py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' />
       </label>

       <label className=''>
          <p>Image</p>
          <input type='text'
            onChange={(e) => setImage(e.target.value)} 
              placeholder='Image' 
                className='bg-slate-200 w-full py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' />
       </label>

       <label className=''>
          <p>Description</p>
          <input type='text'
            onChange={(e) => setDescription(e.target.value)} 
              placeholder='Description' 
                className='bg-slate-200 w-full py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' />
       </label>

       <button className='bg-violet-600 w-full font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>Go Ahead!</button>
      
      </form>
    </div>
  )
}

export default PostPhoto
