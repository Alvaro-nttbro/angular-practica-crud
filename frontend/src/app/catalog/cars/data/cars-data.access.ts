import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarSummary, PaginatedMetaDto } from '../../../../generated/api/swagger.types';
import { CarsPage, CarSummaryRecord, MetaPage } from '../cars.models';
import { CarsApiClient } from './cars-api.client';

export function mapCarToRecord(vo: CarSummary): CarSummaryRecord {
  return {
    id: vo.id,
    brand: vo.brand,
    model: vo.model,
    total: vo.total ?? 0,
    imageUrl: vo.imageUrl ?? '',
  };
}

// export function mapCarDetailsToRecord(vo: CarDetailEntity): CarRecordDetails {
//   return {
//     registrationDate: vo.registrationDate,
//     mileage: vo.mileage,
//     currency: vo.currency ?? 'EUR',
//     price: vo.price,
//     manufactureYear: vo.manufactureYear,
//     availability: vo.availability ?? true,
//     color: vo.color ?? '',
//     description: vo.description ?? '',
//     licensePlate: vo.licensePlate,
//   };
// }

export function mapMetaToRecord(vo: PaginatedMetaDto): MetaPage {
  return {
    totalItems: vo.totalItems,
    itemCount: vo.itemCount,
    itemsPerPage: vo.itemsPerPage,
    totalPages: vo.totalPages,
    currentPage: vo.currentPage,
    hasNextPage: vo.hasNextPage,
    hasPreviousPage: vo.hasPreviousPage,
  };
}

@Injectable({
  providedIn: 'root',
})
export class CarsDataAccess {
  readonly #client = inject(CarsApiClient);

  listPaginated(page: number, limit: number): Observable<CarsPage> {
    return this.#client.listPaginated(page, limit).pipe(
      map((vo) => ({
        items: vo.items.map(mapCarToRecord),
        meta: vo.meta,
      })),
    );
  }

  list(): Observable<CarSummaryRecord[]> {
    return this.#client.list().pipe(map((vos) => vos.map(mapCarToRecord)));
  }

  // create(dto: CreateCarDto): Observable<CarRecord> {
  //   return this.#client.create(dto).pipe(map(mapCarToRecord));
  // }

  // update(id: string, dto: UpdateCarDto): Observable<CarRecord> {
  //   return this.#client.update(id, dto).pipe(map(mapCarToRecord));
  // }

  // delete(id: string) {
  //   this.#client.delete();
  // }
}
