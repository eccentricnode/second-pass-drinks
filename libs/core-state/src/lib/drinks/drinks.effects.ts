import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { DrinksState } from './drinks.reducer';
import {
  DrinksActionTypes,
  LoadDrinks,
  DrinksLoaded,
  AddDrink,
  DrinkAdded,
  UpdateDrink,
  DeleteDrink,
  DrinkDeleted
} from './drinks.actions';
import { DrinksService, Drink } from '@second-pass/core-data';

@Injectable()
export class DrinksEffects {
  @Effect() loadDrinks$ = this.dataPersistence.fetch(DrinksActionTypes.LOAD_DRINKS, {
    run: (action: LoadDrinks, state: DrinksState) => {
      return this.drinksService.all().pipe(map((res: Drink[]) => new DrinksLoaded(res)));
    },

    onError: (action: LoadDrinks, error) => {
      console.error('Error', error);
    }
  });

  @Effect() addDrink$ = this.dataPersistence.pessimisticUpdate(DrinksActionTypes.ADD_DRINK, {
    run: (action: AddDrink, state: DrinksState) => {
      return this.drinksService.create(action.payload).pipe(map((res: Drink) => new DrinkAdded(res)));
    },

    onError: (action: AddDrink, error) => {
      console.error('Error', error);
    }
  });

  @Effect() updateDrinks$ = this.dataPersistence.pessimisticUpdate(DrinksActionTypes.UPDATE_DRINK, {
    run: (action: UpdateDrink, state: DrinksState) => {
      return this.drinksService.update(action.payload).pipe(map((res: Drink) => new UpdateDrink(res)));
    },

    onError: (action: UpdateDrink, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deleteDrink$ = this.dataPersistence.pessimisticUpdate(DrinksActionTypes.DELETE_DRINK, {
    run: (action: DeleteDrink, state: DrinksState) => {
      return this.drinksService.delete(action.payload.id).pipe(map(_ => new DrinkDeleted(action.payload)));
    },

    onError: (action: DeleteDrink, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DrinksState>,
    private drinksService: DrinksService
  ) {}
}
