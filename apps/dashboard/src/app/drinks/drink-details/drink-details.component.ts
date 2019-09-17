import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Drink } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent {
  selectedDrink: Drink;
  
  @Input() group: FormGroup;
  @Input() set drink(value: Drink) {
    this.selectedDrink = value;
    if (!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      caffeine: value.caffeine,
      sugar: value.sugar,
      founder: value.founder
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
