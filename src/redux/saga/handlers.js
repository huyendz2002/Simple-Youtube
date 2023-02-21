import { call, put } from "redux-saga/effects";
import { setDetail } from "./detailSlice";
import { setRelate } from "./relateSlice";
import requestGetTopic, {
  requestGetDetail,
  requestGetRelate,
  requestGetSubmit,
} from "./request";
import { setDataSearch } from "./submitSlice";
import { setDataList, setLoading } from "./topicSlice";

export default function* handleGetTopic(action) {
  // console.log(action);
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetTopic, action.payload);
    // console.log(response);
    yield put(setDataList(response.data.items));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetDetail(action) {
  try {
    // yield
    const response = yield call(requestGetDetail, action.payload);
    // console.log(response.data);
    yield put(setDetail(response.data.items));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetRelate(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetRelate, action.payload);
    // console.log(response.data.items);
    yield put(setRelate(response.data.items));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetSubmit(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetSubmit, action.payload);
    yield put(setDataSearch(response.data.data));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
