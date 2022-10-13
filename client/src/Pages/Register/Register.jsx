import React from 'react'

const Register = () => {

    const SubmitHandler = (event) => {
        event.preventDefaut()
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>
        <h1 className='text-3xl font-bold mb-8'>Login to your account</h1>
        <form className='flex gap-2 flex-col' onSubmit={SubmitHandler}>
            <input className='bg-slate-200 py-3 px-4 rounded' type='text' placeholder='Username' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='text' placeholder='Email' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='password' placeholder='Password' />
            <input className='bg-slate-200 py-3 px-4 rounded' type='password' placeholder='Confirm Password' />
            <p className='mb-2 text-right text-violet-600'>Forgot Password</p>
            <button className='bg-violet-600 font-bold text-white uppercase p-2 rounded hover:bg-violet-500'>Sign up</button>
            <p className='mt-2'>Already have an Account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register
