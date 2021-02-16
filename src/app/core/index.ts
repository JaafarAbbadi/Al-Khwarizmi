import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authFeatureKey, authReducer, AuthState } from './authentication/authentication.reducers';

export interface AppState {
    router: RouterReducerState;
    [authFeatureKey]: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    [authFeatureKey]: authReducer
};
