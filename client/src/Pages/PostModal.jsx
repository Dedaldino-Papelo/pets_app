import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { closePopUp, fetchPostById } from "../redux/post/postSlice"


const PostModal = () => {

  const {id} = useParams()
  const dispatch = useDispatch()

  const PostReducer = useSelector(state => state.postReducer)
  const {post} = PostReducer

  useEffect(() => {
    dispatch(fetchPostById(id))
  }, [dispatch,id])

  return (
    <div className="fixed bg-black bg-opacity-50 inset-0" onClick={() => dispatch(closePopUp())}>
      <div className='max-w-[960px] bg-white mt-36 mx-auto grid grid-cols-2'>
      <div>
        <img src={post.image} alt='ss' />
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
