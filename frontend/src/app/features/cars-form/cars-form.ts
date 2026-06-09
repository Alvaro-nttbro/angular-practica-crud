import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of, switchMap } from 'rxjs';
import { BrandDataAccess } from '../../catalog/brands/data/brand-data.access';

@Component({
  selector: 'app-cars-form',
  imports: [ReactiveFormsModule],
  templateUrl: './cars-form2.html',
  styleUrl: './cars-form.css',
})
export class CarsForm {
  readonly #dataAccess = inject(BrandDataAccess);
  readonly #fb = inject(NonNullableFormBuilder);

  readonly form = this.#fb.group({
    brand: new FormControl<string | null>(null),
    model: new FormControl<string | null>({ value: null, disabled: true }),
  });

  readonly brands = toSignal(this.#dataAccess.listBrands(), { initialValue: [] });
  readonly selectedBrand = signal<string | null>(null);
  readonly models = toSignal(
    toObservable(this.selectedBrand).pipe(
      switchMap((brandId) => (brandId ? this.#dataAccess.listModels(brandId) : of([]))),
    ),
    { initialValue: [] },
  );
  readonly selectedModel = signal<string | null>(null);

  submit() {}

  onBrandSelected(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedBrand.set(select.value);
    this.selectedModel.set(null);

    if (select.value) {
      this.form.controls.model.enable();
    } else {
      this.form.controls.model.disable();
    }
  }

  onModelSelected(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedModel.set(select.value);
  }
}
