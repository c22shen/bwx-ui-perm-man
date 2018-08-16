import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromFilter from './filter.reducer';
import * as fromGroups from './groups.reducer';
// import * as fromFilterSelections from './filter-selections.reducer';


export interface AdminState {
    filter: fromFilter.State;
    groups: fromGroups.State;
}

export interface State extends fromRoot.State {
    admin: AdminState;
}

export const reducers: ActionReducerMap<AdminState> = {
    filter: fromFilter.reducer,
    groups: fromGroups.reducer,
};

export const getAdminState = createFeatureSelector<State, AdminState>('admin');

export const getFilterState = createSelector(
    getAdminState,
    (state: AdminState) => state.filter
  );


export const getFilterQuery = createSelector(
    getFilterState,
    fromFilter.getFilter
  );
