import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../slices/videoSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
