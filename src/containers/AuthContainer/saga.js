import { call, put, takeLatest } from 'redux-saga/effects';

import {
    loginRequestSuccess,
    loginRequestFail,
} from './action';

import {
    LOGIN_REQUEST
} from './constants';

import request from 'utils/request';

function* loginRequest({payload}) {
    try {
        const config = {
            method: 'post',
            url: '/api/auth',
            data: payload
        };
        const response = yield call(request, config);
        yield put(loginRequestSuccess(response));
    } catch (err) {
        yield put(loginRequestFail(err));
    }
}
 
export default function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
}