import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLookupShowEntriesComponent } from './kanji-lookup-show-entries.component';

describe('KanjiLookupShowEntriesComponent', () => {
  let component: KanjiLookupShowEntriesComponent;
  let fixture: ComponentFixture<KanjiLookupShowEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLookupShowEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLookupShowEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
