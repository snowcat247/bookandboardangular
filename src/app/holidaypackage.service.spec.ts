import { TestBed, inject } from '@angular/core/testing';

import { HolidayPackageService } from './holidaypackage.service';

describe('BranchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayPackageService]
    });
  });

  it('should be created', inject([HolidayPackageService], (service: HolidayPackageService) => {
    expect(service).toBeTruthy();
  }));
});
