import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiGameComponent } from './kanji-game.component';

describe('KanjiGameComponent', () => {
  let component: KanjiGameComponent;
  let fixture: ComponentFixture<KanjiGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
