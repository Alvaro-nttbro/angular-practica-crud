import { TestBed } from '@angular/core/testing';

import { CarsApiClient } from './cars-api.client';

describe('CarsApiClient', () => {
  let service: CarsApiClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsApiClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
