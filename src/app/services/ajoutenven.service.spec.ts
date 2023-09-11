import { TestBed } from '@angular/core/testing';

import { AjoutenvenService } from './ajoutenven.service';

describe('AjoutenvenService', () => {
  let service: AjoutenvenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutenvenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
