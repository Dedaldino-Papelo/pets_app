import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../redux/user/userSlice'

const Profile = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

  return (
    <div className='max-w-[960px] mt-16 mx-auto p-4'>
        <div className='flex flex-wrap justify-between gap-2'>
            <div className='bg-violet-600 rounded text-white p-8 font-bold flex flex-col'>
                <h1 className='text-2xl mb-4'>Menu</h1>
                <Link className='mb-2 duration-200 hover:text-violet-200'>Personal Data</Link>
                <Link to='post' className='mb-2 duration-200 hover:text-violet-200'>Post Photo</Link>
                <span className='cursor-pointer duration-200 hover:text-violet-200' onClick={HandleLogout}>Logout</span>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Profile
