import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { AUTH } from 'const/keys';

/**
 * Direct selector to the language domain
 */

const selectAuth = state => state[AUTH] || initialState;

/**
 * Select the language locale
 */

const authenticatedSelector = () =>
    createSelector(
        selectAuth,
        authState => authState.isAuthenticated,
);

export {
    authenticatedSelector,
};