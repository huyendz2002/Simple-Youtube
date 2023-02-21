import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    querySearch: "",
    dataSearch: [],
  },
  reducers: {
    getSubmit() {},
    setQuerySearch: (state, action) => ({
      ...state,
      querySearch: action.payload,
    }),
    setDataSearch: (state, action) => ({
      ...state,
      dataSearch: action.payload,
    }),
  },
});
export const { getSubmit, setQuerySearch, setDataSearch } = submitSlice.actions;
export default submitSlice.reducer;
