import * as fromRouter from '@ngrx/router-store';

import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

  export interface State {
    router: fromRouter.RouterReducerState;
  }

  export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer,
  };
