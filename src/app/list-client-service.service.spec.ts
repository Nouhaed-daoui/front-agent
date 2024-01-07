import { TestBed } from '@angular/core/testing';

import { ListClientServiceService } from './list-client-service.service';

describe('ListClientServiceService', () => {
  let service: ListClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
