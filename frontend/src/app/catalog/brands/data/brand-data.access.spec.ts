import { TestBed } from '@angular/core/testing';

import { BrandDataAccess } from './brand-data.access';

describe('BrandDataAccess', () => {
  let service: BrandDataAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandDataAccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
