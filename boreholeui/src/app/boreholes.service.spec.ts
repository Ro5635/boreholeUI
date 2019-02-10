import { TestBed } from '@angular/core/testing';

import { BoreholesService } from './boreholes.service';

describe('BoreholesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoreholesService = TestBed.get(BoreholesService);
    expect(service).toBeTruthy();
  });
});
