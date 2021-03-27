import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLookupComponent } from './kanji-lookup.component';

describe('KanjiLookupComponent', () => {
  let component: KanjiLookupComponent;
  let fixture: ComponentFixture<KanjiLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
