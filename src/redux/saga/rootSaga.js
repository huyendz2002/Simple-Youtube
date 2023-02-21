import { all, fork } from "redux-saga/effects";
import topicSaga, { detailSaga, relateSaga, submitSaga } from "./saga";
export default function* rootSaga() {
  yield all([
    fork(topicSaga),
    fork(detailSaga),
    fork(relateSaga),
    fork(submitSaga),
  ]);
}
