import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFourOEightViewComponent } from './code-four-o-eight-view.component';

describe('CodeFourOEightViewComponent', () => {
  let component: CodeFourOEightViewComponent;
  let fixture: ComponentFixture<CodeFourOEightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFourOEightViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFourOEightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
