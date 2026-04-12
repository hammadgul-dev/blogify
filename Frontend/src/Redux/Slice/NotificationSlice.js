import { createSlice } from "@reduxjs/toolkit";

let notificationSlice = createSlice({
  name: "Notification Slice",
  initialState: { message: null },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state, action) {
      state.message = "";
    },
  },
});

export const { setMessage, clearMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
