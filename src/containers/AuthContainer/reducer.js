import produce from 'immer';

import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
} from './constants';
  
export const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    error: false,
    user: []
};
  
const authReducer = (state = initialState, {type, payload}) =>
    produce(state, draft => {
        switch (type) {
            case LOGIN_REQUEST:
                draft.token = '';
                draft.isAuthenticated = false;
                draft.loading = true;
                draft.error = false;
                draft.user = [];
                break;

            case LOGIN_REQUEST_SUCCESS:
                draft.isAuthenticated = true;
                draft.loading = false;
                draft.token = payload.token;
                localStorage.setItem('token', payload.token);
                break;

            case LOGIN_REQUEST_FAIL:
                draft.error = payload;
                draft.loading = false;
                break;
            default:
                break;
        }
});
  
export default authReducer;