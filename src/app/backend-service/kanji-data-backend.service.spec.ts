import { TestBed } from '@angular/core/testing';

import { KanjiDataBackendService } from './kanji-data-backend.service';

describe('KanjiDataBackendService', () => {
  let service: KanjiDataBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiDataBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
