import React from 'react'

const Comments = ({comment}) => {
  return (
    <div className='mt-4'>
      <span className='font-bold'>{comment.user.username}</span>
      <p className='mb-2 leading-6'>{comment.text}</p>
    </div>
  )
}

export default Comments
