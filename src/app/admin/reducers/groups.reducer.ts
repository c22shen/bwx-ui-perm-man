import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Group } from '../models/group';
import { FilterActionsUnion, FilterActionTypes } from '../actions/filter.actions';

export interface State extends EntityState<Group> {
    selectedGroupId: string | null;
}

export const adapter: EntityAdapter<Group> = createEntityAdapter<Group>({
    selectId: (group: Group) => group.groupId
});

export const initialState: State = adapter.getInitialState({
    selectedGroupId: null,
});

export function reducer(
    state = initialState,
    action: FilterActionsUnion
): State {
    switch (action.type) {
    case FilterActionTypes.FilterSuccess: {
      /**
       * The addMany function provided by the created adapter
       * adds many records to the entity dictionary
       * and returns a new state including those records. If
       * the collection is to be sorted, the adapter will
       * sort each record upon entry into the sorted array.
       */
      return adapter.addMany(action.payload, {
        ...state,
        selectedGroupId: state.selectedGroupId,
      });
    }

    case FilterActionTypes.FilterSelect: {
        return {
          ...state,
          selectedGroupId: action.payload,
        };
    }

    default: {
        return state;
    }
  }
}


export const getSelectedId = (state: State) => state.selectedGroupId;
