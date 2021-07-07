import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from 'components/LoginComponent';

import { AUTH as key } from 'const/keys';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../reducer';
import saga from '../saga';

import { loginRequest } from '../action';

const LoginContanier = ({props, loginRequest}) => {
    useInjectReducer({key, reducer});
    useInjectSaga({key, saga});
    return (
        <LoginComponent {...props} loginRequest={loginRequest}/>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    loginRequest: (data) => dispatch(loginRequest(data)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContanier);