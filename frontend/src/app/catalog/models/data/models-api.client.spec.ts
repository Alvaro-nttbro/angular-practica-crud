import { TestBed } from '@angular/core/testing';

import { ModelsApiClient } from './models-api.client';

describe('ModelsApiClient', () => {
  let service: ModelsApiClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsApiClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
