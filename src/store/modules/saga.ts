import { call, put, takeLatest } from "redux-saga/effects";
import { actions as appActions } from "./slice";

export function* AutoLoginSaga() {}
export function* TestSetPhoneToStore() {}
/**
 * Root saga manages watcher lifecycle
 */
export function* appSaga() {
  yield takeLatest(appActions.trigger, AutoLoginSaga);
  yield takeLatest(appActions.setPhoneToStoreTrigger, TestSetPhoneToStore);
}
