import { TestBed } from '@angular/core/testing';

import { MosqueeService } from './mosquee.service';

describe('MosqueeService', () => {
  let service: MosqueeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MosqueeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
