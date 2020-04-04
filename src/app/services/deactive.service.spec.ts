import { TestBed } from '@angular/core/testing';

import { DeactiveService } from './deactive.service';

describe('DeactiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactiveService = TestBed.get(DeactiveService);
    expect(service).toBeTruthy();
  });
});
