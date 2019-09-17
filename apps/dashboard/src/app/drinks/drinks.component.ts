import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Drink } from '@second-pass/core-data';
import { DrinksFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  form: FormGroup;
  drinks$: Observable<Drink[]> = this.drinksFacade.allDrinks$;
  selectedDrink$: Observable<Drink> = this.drinksFacade.selectedDrink$;

  constructor(
    private drinksFacade: DrinksFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.drinksFacade.loadDrinks();
    this.initForm();
    this.drinksFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectDrink(drink) {
    this.drinksFacade.selectDrink(drink.id);
  }

  saveDrink(drink) {
    drink.id ? this.drinksFacade.updateDrink(drink) : this.drinksFacade.createDrink(drink);
  }

  removeDrink(drink: Drink) {
    this.drinksFacade.deleteDrink(drink);
    this.reset();
  }

  reset() {
    this.form.reset();
    this.selectDrink({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      caffeine: [null, Validators.compose([Validators.required])],
      sugar: [null, Validators.compose([Validators.required])],
      founder: ['', Validators.compose([Validators.required])]
    });
  }
}
