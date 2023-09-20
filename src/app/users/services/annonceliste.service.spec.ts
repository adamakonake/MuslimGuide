import { TestBed } from '@angular/core/testing';

import { AnnoncelisteService } from './annonceliste.service';

describe('AnnoncelisteService', () => {
  let service: AnnoncelisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoncelisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
