import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/postSlice";

export const store = configureStore({
    reducer: {
        postReducer: postSlice
    }
})