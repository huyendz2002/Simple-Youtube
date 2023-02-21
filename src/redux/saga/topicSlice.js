import { createSlice } from "@reduxjs/toolkit";
import { sidebarList } from "../../collections/constants";

const topicSlice = createSlice({
  name: "topic",
  initialState: {
    query: "New",
    dataList: [],
    loading: true,
    sidebarListRedux: sidebarList,
    list: false,
  },
  reducers: {
    setQuery: (state, action) => ({ ...state, query: action.payload }),
    getTopic() {},
    setDataList: (state, action) => ({ ...state, dataList: action.payload }),
    setList: (state, action) => ({ ...state, list: action.payload }),
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
    setSidebarListRedux: (state, action) => ({
      ...state,
      sidebarListRedux: action.payload,
    }),
  },
});
export const {
  setQuery,
  getTopic,
  setDataList,
  setLoading,
  setSidebarListRedux,
  setList,
} = topicSlice.actions;
export default topicSlice.reducer;
