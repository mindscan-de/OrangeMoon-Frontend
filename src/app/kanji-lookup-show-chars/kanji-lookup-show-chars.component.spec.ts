import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLookupShowCharsComponent } from './kanji-lookup-show-chars.component';

describe('KanjiLookupShowCharsComponent', () => {
  let component: KanjiLookupShowCharsComponent;
  let fixture: ComponentFixture<KanjiLookupShowCharsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLookupShowCharsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLookupShowCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
