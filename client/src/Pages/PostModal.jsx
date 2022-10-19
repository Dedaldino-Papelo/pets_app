import { useDispatch } from "react-redux"
import { closePopUp } from "../redux/post/postSlice"


const PostModal = () => {

  const dispatch = useDispatch()

  return (
    <div className="fixed bg-black bg-opacity-50 inset-0" onClick={() => dispatch(closePopUp())}>
      <div className='max-w-[960px] bg-white mt-36 mx-auto grid grid-cols-2'>
      <div>
        <img src={process.env.PUBLIC_URL + "alin-surdu-j5GCqQM3eYA-unsplash.jpg"} alt='ss' />
      </div>
      <div>
        <div>
          <p className='flex justify-between'>
            <span>@Cat</span>
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
