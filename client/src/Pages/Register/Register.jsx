import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../../Components/Header/Message'
import { registerUser } from '../../Redux/user/userSlice'

const Register = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ alert, setAlert]  = useState('')
  const [ msg, setMsg ] = useState('')

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

        { alert ? <Message variant = 'danger'> { alert } </Message>: '' }
        { msg ? <Message variant = 'danger'> { msg } </Message>: '' }

        <h1 className='text-3xl font-bold mb-8'>Create an Account</h1>

        <form className='flex gap-2 flex-col' onSubmit = {SubmitHandler}>
          <input 
            className = 'input-field' 
            type='text' 
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)} 
          />

          <input 
            className = 'input-field' 
            type = 'text' 
            placeholder = 'Email'
            onChange = {(e) => setEmail(e.target.value)}  
          />

          <input 
            className = 'input-field' 
            type = 'password' 
            placeholder = 'Password'
            onChange = {(e) => setPassword(e.target.value)}  
          />

          <input 
            className = 'input-field' 
            type = 'password' 
            placeholder = 'Confirm Password'
            onChange = {(e) => setConfirmPassword(e.target.value)}  
            />

          <button className='btn-form'>
            Sign up
          </button>

          <p className='mt-2'>Already have an Account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
