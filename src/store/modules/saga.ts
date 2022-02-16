import { call, put, takeLatest } from "redux-saga/effects";
import { actions as appActions } from "./slice";

export function* AutoLoginSaga() {}

/**
 * Root saga manages watcher lifecycle
 */
export function* appSaga() {
  yield takeLatest(appActions.trigger, AutoLoginSaga);
}
