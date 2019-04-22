import { all, takeEvery } from "redux-saga/effects";
import * as auth from "./auth";
import * as accounts from './accounts';
import types from "../actions/constants";

function* rootSagas() {
  yield all([
    takeEvery(types.USER_SIGNIN, auth.userSignin),
    takeEvery(types.USER_SIGNUP, auth.userSignup)
  ]);
  yield all([
    takeEvery(types.USER_STATUS, auth.userSigninStatus),
  ]);
  yield all([
    takeEvery(types.GET_ACCOUNT_LIST, accounts.getAccountList)
  ])
}

export default rootSagas;
