import {createSlice} from "@reduxjs/toolkit"
let themeSlice = createSlice({
  name: "theme Slice",
  initialState: {mode: "light"},
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
  },
})
export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer
