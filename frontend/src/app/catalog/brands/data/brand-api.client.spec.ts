import { TestBed } from '@angular/core/testing';

import { BrandApiClient } from './brand-api.client';

describe('BrandApiClient', () => {
  let service: BrandApiClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandApiClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
