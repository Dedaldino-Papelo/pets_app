import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const createComment = createAsyncThunk('comment/createComment', 
  async ({commentText,id}, { getState, }) => {
      try {
        const {userReducer: {users: {token}}} = getState()

        await axios.post(`http://localhost:8000/post/${id}/comment`,{
          text: commentText,
        }, {
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
       
      } catch (error) {
        console.log(error.response)
      }
    }
  )


export const fetchPostComments = createAsyncThunk('comment/fetchComments', 
async () => {
      try {
        
        const res = await axios.get('http://localhost:8000/posts/comments')
        return res.data
       
      } catch (error) {
        console.log(error.response)
      }
    }
  )

  const initialState = {
    comments: [],
    loading: false,
    error: ''
  }

   const commentSlice = createSlice({
    name: 'postComments',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchPostComments.pending, (state) => {
          state.loading = true
        })

        builder.addCase(fetchPostComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
            state.error = ''

        })

        builder.addCase(fetchPostComments.rejected, (state, action) => {
            state.loading = false
            state.comments = []
            state.error = action.payload
        })
    }
  })

  export default commentSlice.reducer

