import { TestBed } from '@angular/core/testing';

import { ConsultationStorageService } from './consultation-storage.service';

describe('ConsultationStorageService', () => {
  let service: ConsultationStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
