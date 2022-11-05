import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Comments from "../Components/Comments"
import Loader from "../Components/Loader"
import { createComment, fetchPostComments } from "../redux/comment/commentSlice"
import { closePopUp, deletePost, fetchPostById } from "../redux/post/postSlice"


const PostModal = () => {
  const [commentText, setCommentText] = useState('')

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const PostReducer = useSelector(state => state.postReducer)
  const { post, loadingModal } = PostReducer

  const userReducer = useSelector(state => state.userReducer)
  const { users } = userReducer

  const comment = useSelector(state => state.commentReducer)
  const { comments, loading } = comment

  useEffect(() => {
    dispatch(fetchPostById(id))
    dispatch(fetchPostComments())
  }, [dispatch, id])

  const HandleDelete = async (id) => {
    try {
      await dispatch(deletePost(id)).unwrap()
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createComment({commentText, id})).unwrap()
    setCommentText("")
}

  return (
    <div className="fixed bg-black z-1000 bg-opacity-60 inset-0" onClick={() => dispatch(closePopUp())}>
      
      {loadingModal && <Loader />}
      {loading && <Loader />}

      <div onClick={(e) => e.stopPropagation()} className='max-w-[940px] transform scale-90 animate-scaileUp rounded-md h-[32rem] overflow-hidden bg-white mt-32 mx-auto grid grid-cols-2'>
        <div className="">
          <img src={post.image} alt={post.name} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-rows-layout overflow-auto">
          <div className="header px-8 py-4">
          <p className='flex mb-4 justify-between'>
              <span className="text-gray-400">by: {post.user ? post.user.username : ''}</span>

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

          <div className="body px-8 overflow-auto">
            {
                comments.map(comment => (
                  <Comments key={comment._id} comment={comment} />
                ))
              }
          </div>

          <div className="footer">
            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-wrap gap-2 m-4">
              <textarea
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText}
                className="bg-gray-200 p-2 rounded resize-none outline-none"
                placeholder="Comment...">
              </textarea>
              <button className="bg-violet-700 grow py-2 px-4 text-white rounded hover:bg-violet-600 ">Drop it!</button>
            </form>
          </div>
        </div>

      </div>

    </div>

  )
}

export default PostModal
