import { TestBed, inject } from '@angular/core/testing';

import { AuthcheckandrouteService } from './authcheckandroute.service';

describe('AuthcheckandrouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthcheckandrouteService]
    });
  });

  it('should be created', inject([AuthcheckandrouteService], (service: AuthcheckandrouteService) => {
    expect(service).toBeTruthy();
  }));
});
