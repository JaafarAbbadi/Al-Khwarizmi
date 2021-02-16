import { createReducer, on, Action } from '@ngrx/store';
import {
    loginFailed,
    loginEmailValidationResult,
    RegisterEmailValidationResult,
    RegisterPhoneNumberValidationResult
} from './authentication.actions';

export const authFeatureKey = 'authentication';

export interface AuthState {
    loginEmailValid: boolean;
    registerEmailValid: boolean;
    registerPhoneNumberValid: boolean;
    loginErrorMessage: string;
    registerErrorMessage: string;
}

export const initialAuthState: AuthState = {
    loginEmailValid: false,
    registerEmailValid: false,
    registerPhoneNumberValid: false,
    loginErrorMessage: '',
    registerErrorMessage: ''
};

const reducer = createReducer(
    initialAuthState,
    on(
        loginFailed,
        (state, { loginErrorMessage }) => ({ ...state, loginErrorMessage })
    ),
    on(
        loginEmailValidationResult,
        (state, { loginEmailValid }) => ({ ...state, loginEmailValid })
    ),
    on(
        RegisterEmailValidationResult,
        (state, { registerEmailValid }) => ({ ...state, registerEmailValid })
    ),
    on(
        RegisterPhoneNumberValidationResult,
        (state, { registerPhoneNumberValid }) => ({ ...state, registerPhoneNumberValid })
    ),

);

export function authReducer(state: AuthState | undefined, action: Action) {
    return reducer(state, action);
}
