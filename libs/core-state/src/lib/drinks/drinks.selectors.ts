import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDrinks from './drinks.reducer';
import { emptyDrink } from '@second-pass/core-data';

// Lookup the 'Drinks' feature state managed by NgRx
export const selectDrinksState = createFeatureSelector<fromDrinks.DrinksState>('drinks');

export const selectDrinksIds = createSelector(
  selectDrinksState,
  fromDrinks.selectDrinksIds
);

export const selectDrinksEntities = createSelector(
  selectDrinksState,
  fromDrinks.selectDrinksEntities
);

export const selectAllDrinks = createSelector(
  selectDrinksState,
  fromDrinks.selectAllDrinks
);

export const selectCurrentDrinkId = createSelector(
  selectDrinksState,
  fromDrinks.getSelectedDrinkId
);

export const selectCurrentDrink = createSelector(
  selectDrinksEntities,
  selectCurrentDrinkId,
  (drinksEntities, drinkId) => {
    return drinkId ? drinksEntities[drinkId] : Object.assign({}, emptyDrink); 
  }
);