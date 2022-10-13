import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-violet-600'>
      <div className='container text-white flex justify-between items-center p-4'>
      <div className='header-logo'>
        <h2>Pets</h2>
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
