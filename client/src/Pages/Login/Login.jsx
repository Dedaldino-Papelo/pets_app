import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Message from '../../Components/Header/Message'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const SubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8000/login', {
        email,
        password
      })
      console.log(res.data)

    } catch (error) {
      setMsg(error.response.data.message)
      console.log(error.response.data.message)
    }
}

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>

        {msg ? <Message variant='danger'>{msg}</Message> : ''}

        <h1 className='text-3xl font-bold mb-8'>Login to your account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>

            <input className='bg-slate-200 py-3 px-4 rounded' 
              type='text' 
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}  
              />

            <input className='bg-slate-200 py-3 px-4 rounded' 
              type='password' 
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} 
                />

            <Link className='mb-2 text-right text-violet-600'>Forgot Password</Link>
            <button className='bg-violet-600 font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>Sign in</button>
            <p className='mt-2'>Don't have account? <Link to='/register'>Register</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Login
