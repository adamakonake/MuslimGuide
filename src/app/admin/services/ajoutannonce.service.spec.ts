import { TestBed } from '@angular/core/testing';

import { AjoutannonceService } from './ajoutannonce.service';

describe('AjoutannonceService', () => {
  let service: AjoutannonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutannonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
