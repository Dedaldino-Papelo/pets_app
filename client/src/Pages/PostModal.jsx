import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"
import { closePopUp, fetchPostById } from "../redux/post/postSlice"


const PostModal = () => {

  const {id} = useParams()
  const dispatch = useDispatch()

  const PostReducer = useSelector(state => state.postReducer)
  const {post, loadingModal} = PostReducer

  useEffect(() => {
    dispatch(fetchPostById(id))
  }, [dispatch,id])

  return (
    <div className="fixed bg-black z-1000 bg-opacity-50 inset-0" onClick={() => dispatch(closePopUp())}>
          {loadingModal && <Loader />}
      <div onClick={(e) => e.stopPropagation()} className='
          max-w-[940px] 
          transform scale-90 animate-scaileUp 
          rounded-md h-[32rem] 
          overflow-hidden
          bg-white 
          mt-32 mx-auto 
          grid grid-cols-2'>
        <div className="">
          <img src={post.image} alt={post.name} className="w-full h-full object-cover"/>
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
