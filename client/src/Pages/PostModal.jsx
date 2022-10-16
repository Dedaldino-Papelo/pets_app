import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostModal = () => {
    const {id} = useParams()

  return (
    <div>
      <div className='max-w-[960px] mt-0 mx-auto p-4 border grid grid-cols-2'>
      <div>
        <img src={process.env.PUBLIC_URL + "alin-surdu-j5GCqQM3eYA-unsplash.jpg"} alt='ss' />
      </div>
      <div>
        <div>
          <p className='flex justify-between'>
            <spn>@Cat</spn>
            <span>151134</span>
          </p>
          <h1 className='text-2xl font-bold text-violet-700'>John Doe</h1>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default PostModal
