import { TestBed } from '@angular/core/testing';

import { ConsultationSaveService } from './consultation-save.service';

describe('ConsultationSaveService', () => {
  let service: ConsultationSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
