import { TestBed } from '@angular/core/testing';

import { AppoinmentserviceService } from './appoinmentservice.service';

describe('AppoinmentserviceService', () => {
  let service: AppoinmentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoinmentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
