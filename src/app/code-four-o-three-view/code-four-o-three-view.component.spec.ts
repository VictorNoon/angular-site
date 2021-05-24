import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFourOThreeViewComponent } from './code-four-o-three-view.component';

describe('CodeFourOThreeViewComponent', () => {
  let component: CodeFourOThreeViewComponent;
  let fixture: ComponentFixture<CodeFourOThreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFourOThreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFourOThreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
