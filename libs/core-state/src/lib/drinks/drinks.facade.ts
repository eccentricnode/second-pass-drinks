import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllDrinks, selectCurrentDrink } from './drinks.selectors';
import { Drink } from '@second-pass/core-data';
import { DrinksState } from './drinks.reducer';
import * as DrinksActions from './drinks.actions';
import { DrinksActionTypes } from './drinks.actions';

@Injectable()
export class DrinksFacade {
  allDrinks$ = this.store.pipe(select(selectAllDrinks));
  selectedDrink$ = this.store.pipe(select(selectCurrentDrink));

  mutations$ = this.actions$ 
    .pipe(
      filter(action => 
        action.type === DrinksActionTypes.ADD_DRINK
        || action.type === DrinksActionTypes.UPDATE_DRINK
        || action.type === DrinksActionTypes.DELETE_DRINK
      )
    );

  constructor(private store: Store<DrinksState>, private actions$: ActionsSubject) {}

  selectDrink(drinkId: string) {
    this.store.dispatch(new DrinksActions.DrinkSelected(drinkId));
  }

  loadDrinks() {
    this.store.dispatch(new DrinksActions.LoadDrinks());
  }

  createDrink(drink: Drink) {
    this.store.dispatch(new DrinksActions.AddDrink(drink));
  }

  updateDrink(drink: Drink) {
    this.store.dispatch(new DrinksActions.UpdateDrink(drink));
  }

  deleteDrink(drink: Drink) {
    this.store.dispatch(new DrinksActions.DeleteDrink(drink));
  }
}
