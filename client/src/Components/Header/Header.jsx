import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-violet-600'>
      <div className='max-w-[960px] mt-0 mx-auto text-white flex justify-between items-center p-4'>
        <div className='header-logo'>
          <Link to='/'>Pets</Link>
        </div>
        <div className='flex'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
