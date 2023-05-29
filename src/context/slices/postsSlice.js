import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    posts: []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        addPosts: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        }
    }
});

export const { addPosts } = postsSlice.actions;
