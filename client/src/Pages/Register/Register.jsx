import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../../Components/Header/Message'
import { registerUser } from '../../redux/user/userSlice'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState('')
  const [msg, setMsg] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()


    const SubmitHandler = async(e) => {
        e.preventDefault()
        if(password !== confirmPassword){
          return setAlert("Password don't match")
        }
        try {
          await dispatch(registerUser({username,email,password})).unwrap()
          navigate('/') 
        } catch (error) {
          setMsg(error)
        }   
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>

      {alert ? <Message variant= 'danger'>{alert}</Message>: ''}
        {msg ? <Message variant= 'danger'>{msg}</Message>: ''}

        <h1 className='text-3xl font-bold mb-8'>Create an Account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>
          <input 
            className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
            type='text' 
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)} 
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
            type='text' 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}  
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
            type='password' 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}  
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-500' 
            type='password' 
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}  
            />

          <button 
            className='bg-violet-600 font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>
              Sign up
            </button>
          <p className='mt-2'>Already have an Account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
