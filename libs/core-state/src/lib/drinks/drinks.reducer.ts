import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Drink } from '@second-pass/core-data';
import { DrinksAction, DrinksActionTypes, Drinks } from './drinks.actions';

export interface DrinksState extends EntityState<Drink> {
  selectedDrinkId: string | null;
}


export const drinksAdapter: EntityAdapter<Drink> = createEntityAdapter<Drink>();

export const initialState: DrinksState = drinksAdapter.getInitialState({
  selectedDrinkId: null,
});


export function drinksReducer(state: DrinksState = initialState, action: DrinksAction) {
  switch (action.type) {
    case DrinksActionTypes.DRINK_SELECTED: {
      return Object.assign({}, state, { selectDrinkId: action.payload});
    }

    case DrinksActionTypes.DRINKS_LOADED: {
      return drinksAdapter.upsertMany(action.payload, state);
    }

    case DrinksActionTypes.DRINK_ADDED: {
      return drinksAdapter.addOne(action.payload, state);
    }

    case DrinksActionTypes.DRINK_UPDATED: {
      return drinksAdapter.upsertOne(action.payload, state);
    }

    case DrinksActionTypes.DRINK_DELETED: {
      return drinksAdapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedDrinkId = (state: DrinksState) => state.selectedDrinkId;

// get the selectors

export const {
  selectIds: selectDrinksIds,
  selectEntities: selectDrinksEntities,
  selectAll: selectAllDrinks,
  selectTotal: selectDrinksTotal
} = drinksAdapter.getSelectors();
