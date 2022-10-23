import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "../Components/Card"
import Loader from "../Components/Loader"
import { fetchPost } from "../redux/post/postSlice"
import PostModal from "./PostModal"

const Homepage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postReducer = useSelector((state) =>state.postReducer)
  const {posts,hidden,loading} = postReducer

  const userReducer = useSelector((state) =>state.userReducer)
  const {users} = userReducer


  useEffect(() => {
    if(users && !users.username){
       return navigate('/login')
    }
    dispatch(fetchPost())
    
  }, [dispatch,navigate,users.username,users])

  return (
    <>
    {loading && <Loader />}
    <div className="max-w-[960px] mt-16 mx-auto p-4 grid grid-cols-3 gap-2">
        {
          posts && posts.map((post) => (
            <Card key={post._id} posts={post} />
           ))
        }
    </div>
    {!hidden && <PostModal />}
    </>
  )
}
export default Homepage
