import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Brand, Model } from '../../../../generated/api/swagger.types';
import { BrandRecord, ModelRecord } from '../brands.models';
import { BrandApiClient } from './brand-api.client';

function mapBrand(vo: Brand): BrandRecord {
  return {
    id: vo.id,
    name: vo.name,
  };
}

function mapModel(vo: Model): ModelRecord {
  return {
    id: vo.id,
    name: vo.name,
  };
}

@Injectable({
  providedIn: 'root',
})
export class BrandDataAccess {
  readonly #client = inject(BrandApiClient);

  listBrands(): Observable<BrandRecord[]> {
    return this.#client.listBrands().pipe(map((vos) => vos.map(mapBrand)));
  }

  listModels(brandId: string): Observable<ModelRecord[]> {
    return this.#client.listBrandModels(brandId).pipe(map((vos) => vos.map(mapModel)));
  }
}
