/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDataService } from './product-data.service';

describe('ProductDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDataService]
    });
  });

  it('should ...', inject([ProductDataService], (service: ProductDataService) => {
    expect(service).toBeTruthy();
  }));
});
