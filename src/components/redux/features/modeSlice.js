import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: true,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    change: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const selectMode = (state) => state.mode.mode;

export const { change } = modeSlice.actions;

export default modeSlice.reducer;
