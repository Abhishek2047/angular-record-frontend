import { TestBed } from '@angular/core/testing';

import { StudentUpadteService } from './student-upadte.service';

describe('StudentUpadteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentUpadteService = TestBed.get(StudentUpadteService);
    expect(service).toBeTruthy();
  });
});
