import React from 'react'

const Message = ({children, variant}) => {
  return (
<div role="alert">
    <div 
        className={`${variant ==='danger'? 'bg-red-100 text-red-700': 'bg-green-100 text-green-700'} 
            rounded-lg py-3 px-6 text-base mb-3`}>
                <p>{children}</p>
    </div>
</div>
  )
}
export default Message
