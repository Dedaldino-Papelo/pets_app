import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'user/Register', async ({ username, email, password }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:8000/register', {
                username,
                email,
                password
            })
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data))
            }
            return fulfillWithValue(res.data)

        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/login', async ({email, password}, {rejectWithValue, fulfillWithValue}) => {
        try {
            const res = await axios.post('http://localhost:8000/login', {
                email,
                password
            })
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data))
            }
            return fulfillWithValue(res.data)

        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    })

const initialState = {
    loading: false,
    users: {},
    error: '',

    loginLoading: false,
    loginError: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout(){
            localStorage.removeItem('user')
            return{
                loading: false,
                users: {},
                error: '',
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = true
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.users = {}
            state.error = action.payload
        })
//================================================================================
        builder.addCase(loginUser.pending, (state) => {
            state.loginLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loginLoading = true
            state.users = action.payload
            state.loginError = ''
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginError = false
            state.users = {}
            state.loginError = action.payload
        })
    }
})

export const { logout } = userSlice.actions
export default userSlice.reducer