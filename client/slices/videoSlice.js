import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  videos: [],
  selected: {},
  loading: false,
  error: "",
  updateVideoLoading: false,
  updateVideoError: "",
  updateVideoSuccess: false,
  deleteVideoLoading: false,
  deleteVideoError: "",
  deleteVideoSuccess: false,
  addVideoLoading: false,
  addVideoError: "",
  addVideoSuccess: false,
};
export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addSelectedVideo: (state, action) => {
      state.selected = action.payload;
    },
    resetAddVideoState: (state) => {
      state.addVideoLoading = false;
      state.addVideoError = "";
      state.addVideoSuccess = false;
    },
    resetDeleteVideoState: (state) => {
      state.deleteVideoLoading = false;
      state.deleteVideoError = "";
      state.deleteVideoSuccess = false;
    },
    resetUpdateVideoState: (state) => {
      state.updateVideoLoading = false;
      state.updateVideoError = "";
      state.updateVideoSuccess = false;
    },
    addVideoList: (state, action) => {
      state.videos = action.payload;
      state.loading = false;
      state.error = "";
    },
    addVideoSuccess: (state) => {
      state.addVideoLoading = false;
      state.addVideoError = "";
      state.addVideoSuccess = true;
    },
    addVideoLoading: (state) => {
      state.addVideoLoading = true;
      state.addVideoError = "";
      state.addVideoSuccess = false;
    },
    addVideoFailed: (state, action) => {
      state.addVideoLoading = false;
      state.addVideoError = action.payload;
      state.addVideoSuccess = false;
    },
    deleteVideoSuccess: (state) => {
      state.deleteVideoLoading = false;
      state.deleteVideoError = "";
      state.deleteVideoSuccess = true;
    },
    deleteVideoLoading: (state) => {
      state.deleteVideoLoading = true;
      state.deleteVideoError = "";
      state.deleteVideoSuccess = false;
    },
    deleteVideoFailed: (state, action) => {
      state.deleteVideoLoading = false;
      state.deleteVideoError = action.payload;
      state.deleteVideoSuccess = false;
    },
    updateVideoSuccess: (state) => {
      state.updateVideoLoading = false;
      state.updateVideoError = "";
      state.updateVideoSuccess = true;
    },
    updateVideoLoading: (state) => {
      state.updateVideoLoading = true;
      state.updateVideoError = "";
      state.updateVideoSuccess = false;
    },
    updateVideoFailed: (state, action) => {
      state.updateVideoLoading = false;
      state.updateVideoError = action.payload;
      state.updateVideoSuccess = false;
    },
  },
});
export const {
  addSelectedVideo,
  resetAddVideoState,
  resetDeleteVideoState,
  resetUpdateVideoState,
  addVideoList,
  addVideoSuccess,
  addVideoLoading,
  addVideoFailed,
  deleteVideoSuccess,
  deleteVideoFailed,
  deleteVideoLoading,
  updateVideoFailed,
  updateVideoLoading,
  updateVideoSuccess,
} = videoSlice.actions;
export default videoSlice.reducer;
