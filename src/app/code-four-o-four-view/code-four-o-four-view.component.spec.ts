import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFourOFourViewComponent } from './code-four-o-four-view.component';

describe('CodeFourOFourViewComponent', () => {
  let component: CodeFourOFourViewComponent;
  let fixture: ComponentFixture<CodeFourOFourViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFourOFourViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFourOFourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
