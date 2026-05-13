import {createSlice} from "@reduxjs/toolkit"

let searchSlice = createSlice({
  name: "Blog Post Search",
  initialState: {userSearch: null},
  reducers: {
    setSearch(state, action) {
      state.userSearch = action.payload
    },
  },
})

export const {setSearch} = searchSlice.actions
export default searchSlice.reducer
