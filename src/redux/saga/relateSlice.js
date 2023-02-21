import { createSlice } from "@reduxjs/toolkit";

const relateSlice = createSlice({
  name: "relate",
  initialState: {
    relate: [],
  },
  reducers: {
    getRelate() {},
    setRelate: (state, action) => ({ ...state, relate: action.payload }),
  },
});
export const { getRelate, setRelate } = relateSlice.actions;
export default relateSlice.reducer;
