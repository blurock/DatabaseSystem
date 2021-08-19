import { TestBed } from '@angular/core/testing';

import { StandardserviceService } from './standardservice.service';

describe('StandardserviceService', () => {
  let service: StandardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
