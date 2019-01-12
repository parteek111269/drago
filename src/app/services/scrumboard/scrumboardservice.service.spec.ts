import { TestBed } from '@angular/core/testing';

import { ScrumboardserviceService } from './scrumboardservice.service';

describe('ScrumboardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrumboardserviceService = TestBed.get(ScrumboardserviceService);
    expect(service).toBeTruthy();
  });
});
