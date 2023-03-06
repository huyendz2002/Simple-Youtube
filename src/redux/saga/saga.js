import { takeLatest } from "redux-saga/effects";
import { getDetail } from "./detailSlice";
import handleGetTopic, {
  handleGetDetail,
  handleGetRelate,
  handleGetSubmit,
} from "./handlers";
import { getRelate } from "./relateSlice";
import { getSubmit } from "./submitSlice";
import { getTopic } from "./topicSlice";

export default function* topicSaga() {
  yield takeLatest(getTopic().type, handleGetTopic);
}
export function* detailSaga() {
  yield takeLatest(getDetail().type, handleGetDetail);
}
export function* relateSaga() {
  yield takeLatest(getRelate().type, handleGetRelate);
}
export function* submitSaga() {
  yield takeLatest(getSubmit().type, handleGetSubmit);
}
