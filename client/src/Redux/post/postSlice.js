import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPost = createAsyncThunk('post/fetchposts', async () => {
    try {
        const res = await axios.get('http://localhost:8000/posts')
        return res.data
        
    } catch (error) {
        console.log(error)
    }
  }
)

 const initialState = {
    loading: false,
    posts: [],
    error: '',
    hidden:true
 }

 export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        openPopUp: (state) => {
            state.hidden = false
        },
        closePopUp: (state) => {
            state.hidden = true
        }
    },
   extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) =>{
            state.loading = true
        })

        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })

        builder.addCase(fetchPost.rejected, (state,action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        })
   }
 })

 export const {openPopUp,closePopUp} = postSlice.actions
 export default postSlice.reducer