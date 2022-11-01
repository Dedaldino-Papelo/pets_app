import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comment/commentSlice";
import postSlice from "./post/postSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        postReducer: postSlice,
        userReducer: userSlice,
        commentReducer: commentSlice
    }
})