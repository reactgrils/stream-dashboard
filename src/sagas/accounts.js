import { call, put } from 'redux-saga/effects';

import types from '../actions/constants';
import * as api from './api';
import ErrorHandle from '../utils/ErrorHandle';





export function* getAccountList() {
  const params = {
    url: '/v1/getAccountList'
  };
  try {
    const { data: { isSuccess, error, result }} = yield call(api.get.bind(this, params.url));
    
    if (!isSuccess) {
      throw new ErrorHandle(error)
    } else {
      yield put({ type: types.ACCOUNT_DATALIST, result});
    }



  } catch (error) {
    console.log(error);
  }
}