import { TestBed } from '@angular/core/testing';

import { M2mKanjiLookupService } from './m2m-kanji-lookup.service';

describe('M2mKanjiLookupService', () => {
  let service: M2mKanjiLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M2mKanjiLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
