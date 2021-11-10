import { TestBed } from '@angular/core/testing';

import { BaseProductServiceService } from './base-product-service.service';

describe('BaseProductServiceService', () => {
  let service: BaseProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
