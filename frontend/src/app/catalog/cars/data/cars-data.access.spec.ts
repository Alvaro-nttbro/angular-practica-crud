import { TestBed } from '@angular/core/testing';

import { CarsDataAccess } from './cars-data.access';

describe('CarsDataAccess', () => {
  let service: CarsDataAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsDataAccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
