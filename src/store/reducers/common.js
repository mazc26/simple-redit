import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  posts: [],
  readPosts: [],
  expandedInfo: {},
  isFetchingPosts: false,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    fetchPosts(state) {
      state.isFetchingPosts = true;
      state.readPosts = initialState.readPosts;
    },
    fetchPostsSuccess(state, action) {
      state.isFetchingPosts = false;
      state.posts = action.payload.data.data.children;
    },
    fetchPostsError(state, action) {
      state.isFetchingPosts = false;
      state.error = action.payload.data;
    },
    setReadStatus(state, action) {
      state.readPosts = [...state.readPosts, action.payload]
    },
    dismissPost(state, action) {
      state.posts = state.posts.filter(item=> item.data.id !== action.payload)
    },
    dismissAll(state) {
      state.posts = initialState.posts;
    }
  }
})

export const { 
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsError,
  setReadStatus,
  dismissPost,
  dismissAll,
} = commonSlice.actions

export default commonSlice.reducer
