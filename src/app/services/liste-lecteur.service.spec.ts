import { TestBed } from '@angular/core/testing';

import { ListeLecteurService } from './liste-lecteur.service';

describe('ListeLecteurService', () => {
  let service: ListeLecteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeLecteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
