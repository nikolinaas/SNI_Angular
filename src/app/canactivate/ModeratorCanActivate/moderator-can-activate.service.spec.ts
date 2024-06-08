import { TestBed } from '@angular/core/testing';

import { ModeratorCanActivateService } from './moderator-can-activate.service';

describe('ModeratorCanActivateService', () => {
  let service: ModeratorCanActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeratorCanActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
