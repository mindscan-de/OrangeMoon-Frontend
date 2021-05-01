import { TestBed } from '@angular/core/testing';

import { UserGameDataService } from './user-game-data.service';

describe('UserGameDataService', () => {
  let service: UserGameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
