import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './authentication.reducers';

export const selectAuth = createFeatureSelector<AuthState>(authFeatureKey);
export const selectLoginError = createSelector(selectAuth, state => state.loginErrorMessage);
export const selectLoginEmailValid = createSelector(selectAuth, state => state.loginEmailValid);
export const selectRegisterEmailValid = createSelector(selectAuth, state => state.registerEmailValid);
export const selectRegisterPhoneNumberValid = createSelector(selectAuth, state => state.registerPhoneNumberValid);
