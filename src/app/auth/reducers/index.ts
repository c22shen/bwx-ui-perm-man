import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../reducers';
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

export interface AuthState {
    status: fromAuth.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
    status: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');


