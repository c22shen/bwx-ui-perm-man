import { Action } from '@ngrx/store';
import { Group } from '../models/group';

export enum FilterActionTypes {
    Filter = '[Filter] Filter',
    FilterSuccess = '[Filter] Filter Complete',
    FilterError = '[Filter] Filter Error',
    FilterSelect = '[Filter] Select'
}

export class Filter implements Action {
    readonly type = FilterActionTypes.Filter;

    constructor(public payload: string) {}
}

export class FilterSuccess implements Action {
    readonly type = FilterActionTypes.FilterSuccess;

    constructor(public payload: Group[]) {}
}

export class FilterError implements Action {
    readonly type = FilterActionTypes.FilterError;

    constructor(public payload?: any) {}
}

export class FilterSelect implements Action {
    readonly type = FilterActionTypes.FilterSelect;

    constructor(public payload: string) {}
}

export type FilterActionsUnion =
  | Filter
  | FilterSuccess
  | FilterError
  | FilterSelect
  ;
