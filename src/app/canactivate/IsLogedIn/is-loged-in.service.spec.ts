import { TestBed } from '@angular/core/testing';

import { IsLogedInService } from './is-loged-in.service';

describe('IsLogedInService', () => {
  let service: IsLogedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLogedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
