import { TestBed } from '@angular/core/testing';

import { ListannoncessService } from './listannoncess.service';

describe('ListannoncessService', () => {
  let service: ListannoncessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListannoncessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
