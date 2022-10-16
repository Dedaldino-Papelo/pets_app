import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Message from '../../Components/Header/Message'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [alert, setAlert] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
          return setAlert("Password don't match")
        }
        axios.post('http://localhost:8000/register', {
          username,
          email,
          password
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          if(error.response){
            setMsg(error.response.data.message)
            console.log(error.response.data)
          }
        })    
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>
      {alert ? <Message variant= 'danger'>{alert}</Message>: ''}
        {msg ? <Message variant= 'danger'>{msg}</Message>: ''}
        <h1 className='text-3xl font-bold mb-8'>Create an Account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>
          <input 
            className='bg-slate-200 py-3 px-4 rounded' 
            type='text' 
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)} 
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded' 
            type='text' 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}  
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded' 
            type='password' 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}  
            />

          <input 
            className='bg-slate-200 py-3 px-4 rounded' 
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
