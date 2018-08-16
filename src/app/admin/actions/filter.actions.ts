import { Action } from '@ngrx/store';
import { Group } from '../models/group';

export enum FilterActionTypes {
    Filter = '[Filter] Filter',
    FilterComplete = '[Filter] Filter Complete',
    FilterError = '[Filter] Filter Error',
    Load = '[Filter] Load',
    Select = '[Filter] Select'
}

export class Filter implements Action {
    readonly type = FilterActionTypes.Filter;
  
    constructor(public payload: string) {}
}

export class FilterComplete implements Action {
    readonly type = FilterActionTypes.FilterComplete;
  
    constructor(public payload: Group[]) {}
}

export class FilterError implements Action {
    readonly type = FilterActionTypes.FilterError;
  
    constructor(public payload?: any) {}
}

export type FilterActionsUnion =
  | Filter
  | FilterComplete
  | FilterError;