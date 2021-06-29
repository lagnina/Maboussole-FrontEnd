import { TestBed } from '@angular/core/testing';

import { ConseilOrientationService } from './conseil-orientation.service';

describe('ConseilOrientationService', () => {
  let service: ConseilOrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConseilOrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
