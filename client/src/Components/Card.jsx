import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({posts}) => {
  return (
    <div className='border'>
      <Link to={`posts/${posts._id}`}>
        <img className='block rounded object-cover object-center w-full h-full' src={posts.image} alt={posts.name} />
      </Link>
    </div>
  )
}

export default Card
