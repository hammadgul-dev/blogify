import {configureStore} from "@reduxjs/toolkit"
import notificationReducer from "./Slice/NotificationSlice"
import postsFilterReducer from "./Slice/PostsFilters"
import searchSliceReducer from "./Slice/SearchSlice"

let blogifyStore = configureStore({
  reducer: {
    notification: notificationReducer,
    postFilter: postsFilterReducer,
    userSearch: searchSliceReducer,
  },
})

export default blogifyStore
