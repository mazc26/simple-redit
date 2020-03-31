import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  posts: [],
  readPosts: [],
  expandedInfo: null,
  isFetchingPosts: false,
  isFetchingMorePosts: false,
  after: null,
  dist: 0,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    fetchPosts(state, action) {
      state.isFetchingPosts =  !action.payload.after.length;
      state.posts = action.payload.count ? state.posts : [];
      state.isFetchingMorePosts = action.payload.after.length;
    },
    fetchPostsSuccess(state, action) {  
      state.isFetchingPosts = false;
      state.isFetchingMorePosts = false;
      state.posts = [...state.posts, ...action.payload.data.data.children];
      state.after = action.payload.data.data.after;
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
      state.expandedInfo = initialState.expandedInfo;
    },
    setExpandedInfo(state, action) {
      state.expandedInfo = action.payload;
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
  loadMore,
  setExpandedInfo,
} = commonSlice.actions

export default commonSlice.reducer
