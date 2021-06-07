import { TestBed } from '@angular/core/testing';

import { BorderCountriesService } from './border-countries.service';

describe('BorderCountriesService', () => {
  let service: BorderCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
