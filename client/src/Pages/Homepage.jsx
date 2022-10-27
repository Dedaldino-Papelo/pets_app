import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Card from "../Components/Card"
import Loader from "../Components/Loader"
import { fetchPost } from "../redux/post/postSlice"
import PostModal from "./PostModal"

const Homepage = () => {
  const dispatch = useDispatch()

  const postReducer = useSelector((state) =>state.postReducer)
  const {posts,hidden,loading} = postReducer


  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

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
    {posts.length === 0 && <p className="text-center">Não Existem Posts</p>}
    {!hidden && <Outlet />}
    </>
  )
}
export default Homepage
