import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const userReducer = useSelector(state=> state.userReducer)
  const {users} = userReducer

  return (
    <div className='bg-violet-600 fixed w-full z-100 top-0'>
      <div className='max-w-[960px] mt-0 mx-auto text-white flex justify-between items-center p-4'>
        <div className='header-logo'>
          <Link to='/'>Pets</Link>
        </div>
        <div className='flex'>
          {
            users.username ? (
              <Link to='user/profile'>{users.username}</Link>
            ): (
              <>
              <Link to='/login' className='mr-2'>Login</Link>
              <Link to='/register'>Register</Link>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
