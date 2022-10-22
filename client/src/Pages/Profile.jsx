import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
        <div className='text-violet-600 '>
            <h1 className='text-2xl font-bold'>Olá, Dedaldino</h1>
            <span className='cursor-pointer' onClick={HandleLogout}>Sair</span>
        </div>
      
    </div>
  )
}

export default Profile
