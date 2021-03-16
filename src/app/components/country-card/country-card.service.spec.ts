import { TestBed } from '@angular/core/testing';

import { CoungryCardService } from './coungry-card.service';

describe('CoungryCardService', () => {
  let service: CoungryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoungryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
