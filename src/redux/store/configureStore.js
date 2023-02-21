import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootSaga from "../saga/rootSaga";
import { reducer } from "./reducers";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
