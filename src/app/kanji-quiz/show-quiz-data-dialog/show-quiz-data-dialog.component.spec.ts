import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizDataDialogComponent } from './show-quiz-data-dialog.component';

describe('ShowQuizDataDialogComponent', () => {
  let component: ShowQuizDataDialogComponent;
  let fixture: ComponentFixture<ShowQuizDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowQuizDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuizDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
