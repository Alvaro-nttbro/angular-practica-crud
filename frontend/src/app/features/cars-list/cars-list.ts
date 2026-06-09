import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarsDataAccess } from '../../catalog/cars/data/cars-data.access';

@Component({
  selector: 'app-cars-list',
  imports: [],
  templateUrl: './cars-list.html',
  styleUrl: './cars-list.css',
})
export class CarsList {
  readonly #dataAccess = inject(CarsDataAccess);

  readonly cars = toSignal(this.#dataAccess.listPaginated(1, 10));

  constructor() {
    console.log(this.cars());
  }
}
