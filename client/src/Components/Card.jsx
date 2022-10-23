import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openPopUp } from '../redux/post/postSlice'

const Card = ({posts}) => {

  const dispatch = useDispatch()

  const handlePopUp = () => {
    dispatch(openPopUp())
  }

  return (
    <div className=''>
      <Link to={`/posts/${posts._id}`} onClick={handlePopUp}>
        <img 
          className='block rounded object-cover object-center w-full h-full' 
            src={posts.image} alt={posts.name} />
      </Link>
    </div>
  )
}

export default Card
