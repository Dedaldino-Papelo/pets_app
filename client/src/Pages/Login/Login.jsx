import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../../Components/Header/Message'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const SubmitHandler = async(e) => {
    e.preventDefault()
    try {
      await dispatch(loginUser({email, password})).unwrap()
      navigate('/')
    } catch (error) {
      setMsg(error)
    }

}

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>

        {msg ? <Message variant='danger'>{msg}</Message> : ''}

        <h1 className='text-3xl font-bold mb-8'>Login to your account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>

            <input className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
              type='text' 
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}  
              />

            <input className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
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
