import { TestBed } from '@angular/core/testing';

import { MulterService } from './multer.service';

describe('MulterService', () => {
  let service: MulterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
