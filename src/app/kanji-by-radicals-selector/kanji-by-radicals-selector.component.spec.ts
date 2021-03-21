import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiByRadicalsSelectorComponent } from './kanji-by-radicals-selector.component';

describe('KanjiByRadicalsSelectorComponent', () => {
  let component: KanjiByRadicalsSelectorComponent;
  let fixture: ComponentFixture<KanjiByRadicalsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiByRadicalsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiByRadicalsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
