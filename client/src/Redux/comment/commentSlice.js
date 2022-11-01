import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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

