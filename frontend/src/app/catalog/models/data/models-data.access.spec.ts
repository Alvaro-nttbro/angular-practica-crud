import { TestBed } from '@angular/core/testing';

import { ModelsDataAccess } from './models-data.access';

describe('ModelsDataAccess', () => {
  let service: ModelsDataAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsDataAccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
