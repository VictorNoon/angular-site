import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFourOEighteenViewComponent } from './code-four-o-eighteen-view.component';

describe('CodeFourOEighteenViewComponent', () => {
  let component: CodeFourOEighteenViewComponent;
  let fixture: ComponentFixture<CodeFourOEighteenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFourOEighteenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFourOEighteenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
