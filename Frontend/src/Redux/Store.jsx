import {configureStore} from "@reduxjs/toolkit"
import notificationReducer from "./Slice/NotificationSlice"
import postsFilterReducer from "./Slice/PostsFilters"

let blogifyStore = configureStore({
  reducer: {
    notification: notificationReducer,
    postFilter: postsFilterReducer,
  },
})

export default blogifyStore
