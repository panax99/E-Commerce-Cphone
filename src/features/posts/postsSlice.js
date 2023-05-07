import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [{}]
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost:(state,action) =>{
            state.posts = action.payload
        }
    }
})
export const {addPost} = postsSlice.actions
const postsReducer = postsSlice.reducer
export default postsReducer