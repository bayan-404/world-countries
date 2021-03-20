import { TestBed } from '@angular/core/testing';

import { AllContriesService } from './all-contries.service';

describe('AllContriesService', () => {
  let service: AllContriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllContriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
