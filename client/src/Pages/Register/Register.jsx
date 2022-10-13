import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const SubmitHandler = (event) => {
        event.preventDefaut()
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>
        <h1 className='text-3xl font-bold mb-8'>Create an Account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>
            <input className='bg-slate-200 py-3 px-4 rounded' type='text' placeholder='Username' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='text' placeholder='Email' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='password' placeholder='Password' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='password' placeholder='Confirm Password' />
            <button className='bg-violet-600 font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>Sign up</button>
            <p className='mt-2'>Already have an Account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
