import { combineReducers } from "@reduxjs/toolkit";
import detailSlice from "../saga/detailSlice";
import relateSlice from "../saga/relateSlice";
import submitSlice from "../saga/submitSlice";
import topicSlice from "../saga/topicSlice";

export const reducer = combineReducers({
  topic: topicSlice,
  detail: detailSlice,
  relate: relateSlice,
  submit: submitSlice,
});
