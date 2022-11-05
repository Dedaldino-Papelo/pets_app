import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const createComment = createAsyncThunk('comment/createComment', 
  async ({commentText,id}, { getState, fulfillWithValue,rejectWithValue }) => {
      try {
        const {userReducer: {users: {token}}} = getState()

        const res = await axios.post(`http://localhost:8000/post/${id}/comment`,{
          text: commentText,
        }, {
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        return fulfillWithValue(res.data)
       
      } catch (error) {
        return rejectWithValue(error.response.data.message)
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
    error: '',
    commentLoading: false,
    errorComment: '',
    comment: {}
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
        //=======================================================================
        builder.addCase(createComment.pending, (state) => {
          state.commentLoading = true
        })

        builder.addCase(createComment.fulfilled, (state, action) => {
          state.commentLoading = false
          state.comment = action.payload
          state.errorComment = ''
          console.log(action.payload)
        })

        builder.addCase(createComment.rejected, (state, action) => {
        state.commentLoading = false
        state.comment = {}
        state.errorComment = action.payload
        })
    }
  })

  export default commentSlice.reducer

