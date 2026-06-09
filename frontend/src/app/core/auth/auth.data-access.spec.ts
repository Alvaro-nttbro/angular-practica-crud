import { TestBed } from '@angular/core/testing';

import { AuthDataAccess } from '../auth/auth.data-access';

describe('AuthDataAccess', () => {
  let service: AuthDataAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDataAccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
