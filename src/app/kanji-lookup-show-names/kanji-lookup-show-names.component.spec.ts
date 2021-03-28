import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLookupShowNamesComponent } from './kanji-lookup-show-names.component';

describe('KanjiLookupShowNamesComponent', () => {
  let component: KanjiLookupShowNamesComponent;
  let fixture: ComponentFixture<KanjiLookupShowNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLookupShowNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLookupShowNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
