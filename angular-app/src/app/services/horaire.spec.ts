import { TestBed } from '@angular/core/testing';

import { Horaire } from './horaire';

describe('Horaire', () => {
  let service: Horaire;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Horaire);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
