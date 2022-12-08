import { createSlice } from '@reduxjs/toolkit';

const mainPostListSlice = createSlice({
  name: 'post',
  initialState: { postData: null, commentsData: [] },
  reducers: {
    setDetailData: (state, action) => {
      state.postData = action.payload;
      state.commentsData = action.payload.comments;
    },
    setNewCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const { setDetailData, setNewCommentsData } = detailPageSlice.actions;
export const detailPageReducer = detailPageSlice.reducer;