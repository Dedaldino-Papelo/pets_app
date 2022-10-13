import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>
        <h1 className='text-3xl font-bold mb-8'>Login to your account</h1>
        <form className='flex gap-2 flex-col'>
            <input className='bg-slate-200 py-3 px-4 rounded' type='text' placeholder='Email' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='password' placeholder='Password' />
            <p className='mb-2 text-right text-violet-600'>Forgot Password</p>
            <button className='bg-violet-600 font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>Sign in</button>
            <p className='mt-2'>Don't have account? <Link to='/register'>Register</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Login
