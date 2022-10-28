import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../Components/Loader"
import { closePopUp, deletePost, fetchPostById } from "../redux/post/postSlice"


const PostModal = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const PostReducer = useSelector(state => state.postReducer)
  const {post, loadingModal} = PostReducer

  const userReducer = useSelector(state=> state.userReducer)
  const {users} = userReducer

/*   const userId = users ? users._id: '' */

  useEffect(() => {
    dispatch(fetchPostById(id))
  }, [dispatch,id])

  const HandleDelete = async (id) => {
    try {
      await dispatch(deletePost(id)).unwrap()
      navigate("/")
    } catch (error) {
        alert(error)
    }
  }

  return (
    <div className="fixed bg-black z-1000 bg-opacity-60 inset-0" onClick={() => dispatch(closePopUp())}>

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
        <div className="p-8">
          <p className='flex mb-4 justify-between'>
            <span className="text-gray-400">by: {post.user ? post.user.username: ''}</span>

          {post.user && post.user._id === users._id &&
            <span onClick={() => HandleDelete(post._id)} 
              className="text-red-700 cursor-pointer hover:text-red-500">
                delete
                </span> 
          }

          </p>
          <h1 className='text-3xl mb-4 font-bold text-violet-700'>{post.name}</h1>
          <p className="">{post.description}</p>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default PostModal
