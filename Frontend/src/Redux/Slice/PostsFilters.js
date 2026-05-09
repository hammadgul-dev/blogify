import {createSlice} from "@reduxjs/toolkit"

let postFilterSlice = createSlice({
  name: "Post Category Filter",
  initialState: {category: null},
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const {setCategory} = postFilterSlice.actions
export default postFilterSlice.reducer
