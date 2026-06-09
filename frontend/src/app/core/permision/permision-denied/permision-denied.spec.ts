import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisionDenied } from './permision-denied';

describe('PermisionDenied', () => {
  let component: PermisionDenied;
  let fixture: ComponentFixture<PermisionDenied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisionDenied],
    }).compileComponents();

    fixture = TestBed.createComponent(PermisionDenied);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
