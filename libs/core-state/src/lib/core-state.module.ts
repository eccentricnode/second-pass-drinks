import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers }from '.';
import { DrinksEffects } from './drinks/drinks.effects';
import { DrinksFacade } from './drinks/drinks.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DrinksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [DrinksFacade]
})
export class CoreStateModule {}
