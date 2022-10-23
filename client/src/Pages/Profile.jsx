import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/user/userSlice'

const Profile = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userReducer = useSelector((state) =>state.userReducer)
    const {users} = userReducer

    const HandleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

  return (
    <div className='max-w-[960px] mt-16 mx-auto p-4'>
        <div>
            <div className='text-violet-600 font-bold flex flex-col'>
                <h1 className='text-2xl mb-4'>Hi, {users.username}</h1>
                <Link className='mb-2'>Personal Data</Link>
                <Link className='mb-2'>Post Photo</Link>
                <span className='cursor-pointer' onClick={HandleLogout}>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Profile
