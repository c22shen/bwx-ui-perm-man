import { FilterActionsUnion, FilterActionTypes } from '../actions/filter.actions';
import { Group } from '../models/group';

export interface State {
    // groups: Group[];
    loading: boolean;
    filter: string;
}

const initialState: State = {
    // groups: [],
    loading: false,
    filter: 'ROLES',
};

export function reducer(state = initialState, action: FilterActionsUnion): State {
    switch (action.type) {
        case FilterActionTypes.Filter: {
            const filter = action.payload;

            return {
                ...state,
                loading: true,
                filter,
              };
        }

        // case FilterActionTypes.FilterComplete: {
        //    return {
        //     groups: action.payload,
        //     loading: false,
        //     filter: state.filter
        //    };
        // }

        case FilterActionTypes.FilterError: {
            return {
                ...state,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

// export const getGroups = (state: State) => state.groups;

export const getFilter = (state: State) => state.filter;

export const getLoading = (state: State) => state.loading;
