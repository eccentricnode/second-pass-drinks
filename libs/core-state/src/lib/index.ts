import { ActionReducerMap } from '@ngrx/store';

import * as fromDrinks from './drinks/drinks.reducer';

export interface AppState {
    drinks: fromDrinks.DrinksState;
}

export const reducers: ActionReducerMap<AppState> = {
    drinks: fromDrinks.drinksReducer,
}