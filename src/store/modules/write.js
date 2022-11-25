import { createSlice } from '@reduxjs/toolkit';

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: {
    title: '',
    content: '',
    thumbnail: '',
    uploadType: '1',
    uploadUrl: 'title',
    imageFileUrl: null,
    selectedTool: null,
    isReverse: false,
    isUploadModal: false,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setThmbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    setUploadType: (state, action) => {
      state.uploadType = action.payload;
    },
    setUploadUrl: (state, action) => {
      state.uploadUrl = action.payload;
    },
    setImageFileUrl: (state, action) => {
      state.imageFileUrl = action.payload;
    },
    setSelectedTool: (state, action) => {
      state.selectedTool = action.payload;
    },
    reversePosition: state => {
      state.isReverse = !state.isReverse;
    },
    setIsUploadModal: (state, action) => {
      state.isUploadModal = action.payload;
    },
  },
});

export const { setTitle, setContent, setThmbnail, setUploadType, setUploadUrl, setImageFileUrl, setSelectedTool, reversePosition, setIsUploadModal } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;
