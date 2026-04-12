import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./Slice/NotificationSlice";

let blogifyStore = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});

export default blogifyStore;
