import { Action } from '@ngrx/store';
import { Drink } from '@second-pass/core-data';

export enum DrinksActionTypes {
  DRINKS_ACTION = '[DRINKS] Drinks Action',
  DRINK_SELECTED = '[DRINKS] Drink Selected',
  LOAD_DRINKS = '[DRINKS] Load Drinks',
  DRINKS_LOADED = '[DRINKS] Drinks Loaded',
  ADD_DRINK = '[DRINKS] Add Drink',
  DRINK_ADDED = '[DRINKS] Drink Added',
  UPDATE_DRINK = '[DRINKS] Update Drink',
  DRINK_UPDATED = '[DRINKS] Drink Updated',
  DELETE_DRINK = '[DRINKS] Delete Drink',
  DRINK_DELETED = '[DRINKS] Drink Deleted',
}

export class Drinks implements Action {
  readonly type = DrinksActionTypes.DRINKS_ACTION;
}

export class DrinkSelected implements Action {
  readonly type = DrinksActionTypes.DRINK_SELECTED;
  constructor(public payload) { }
}

export class LoadDrinks implements Action {
  readonly type = DrinksActionTypes.LOAD_DRINKS;
  constructor() { }
}

export class DrinksLoaded implements Action {
  readonly type = DrinksActionTypes.DRINKS_LOADED;
  constructor(public payload: Drink[]) { }
}

export class AddDrink implements Action {
  readonly type = DrinksActionTypes.ADD_DRINK;
  constructor(public payload: Drink) { }
}

export class DrinkAdded implements Action {
  readonly type = DrinksActionTypes.DRINK_ADDED;
  constructor(public payload: Drink) { }
}

export class UpdateDrink implements Action {
  readonly type = DrinksActionTypes.UPDATE_DRINK;
  constructor(public payload: Drink) { }
}

export class DrinkUpdated implements Action {
  readonly type = DrinksActionTypes.DRINK_UPDATED;
  constructor(public payload: Drink) { }
}

export class DeleteDrink implements Action {
  readonly type = DrinksActionTypes.DELETE_DRINK;
  constructor(public payload: Drink) { }
}

export class DrinkDeleted implements Action {
  readonly type = DrinksActionTypes.DRINK_DELETED;
  constructor(public payload: Drink) { }
}

export type DrinksAction = Drinks 
  | DrinkSelected
  | LoadDrinks
  | DrinksLoaded
  | AddDrink
  | DrinkAdded
  | UpdateDrink
  | DrinkUpdated
  | DeleteDrink
  | DrinkDeleted
;