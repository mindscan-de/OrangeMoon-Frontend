import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiTMComponent } from './kanji-tm.component';

describe('KanjiTMComponent', () => {
  let component: KanjiTMComponent;
  let fixture: ComponentFixture<KanjiTMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiTMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
