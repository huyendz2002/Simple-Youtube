import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
    like: false,
  },
  reducers: {
    getDetail() {},
    setDetail: (state, action) => ({ ...state, detail: action.payload }),
    setLike: (state, action) => ({ ...state, like: action.payload }),
  },
});
export const { setDetail, getDetail, setLike } = detailSlice.actions;
export default detailSlice.reducer;
