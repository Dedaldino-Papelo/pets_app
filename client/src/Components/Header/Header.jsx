import React from 'react'

const Header = () => {
  return (
    <div className='bg-violet-600'>
      <div className='container text-white flex justify-between items-center p-4'>
      <div className='header-logo'>
        <h2>Pets</h2>
      </div>
      <div className='flex'>
          <p className="">Login</p>
          <p>Register</p>
      </div>
      </div>
    </div>
  )
}

export default Header
