import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent {
  @Input() drinks: Drink[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(drink: Drink) {
    this.selected.emit(drink);
  }

  remove(drink: Drink) {
    this.deleted.emit(drink);
  }
}
