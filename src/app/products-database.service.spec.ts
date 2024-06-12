import { TestBed } from '@angular/core/testing';

import { ProductsDatabaseService } from './products-database.service';

describe('ProductsDatabaseService', () => {
  let service: ProductsDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
