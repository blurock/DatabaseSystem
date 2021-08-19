import { TestBed } from '@angular/core/testing';

import { OntologycataloginformationService } from './ontologycataloginformation.service';

describe('OntologycataloginformationService', () => {
  let service: OntologycataloginformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OntologycataloginformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
