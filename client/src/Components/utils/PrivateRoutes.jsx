import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    const userReducer = useSelector(state => state.userReducer)
    const {users} = userReducer
  return (
    users.username ? <Outlet/> : <Navigate to='/login' />
  )
}

export default PrivateRoutes
