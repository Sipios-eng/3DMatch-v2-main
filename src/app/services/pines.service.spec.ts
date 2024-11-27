import { TestBed } from '@angular/core/testing';

import { PinesService } from './pines.service';

describe('PinesService', () => {
  let service: PinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
