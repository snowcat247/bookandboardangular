import { TestBed, inject } from '@angular/core/testing';

import { UserauthenticationService } from './userauthentication.service';

describe('UserauthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserauthenticationService]
    });
  });

  it('should be created', inject([UserauthenticationService], (service: UserauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
