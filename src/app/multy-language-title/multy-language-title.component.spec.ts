import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultyLanguageTitleComponent } from './multy-language-title.component';

describe('MultyLanguageTitleComponent', () => {
  let component: MultyLanguageTitleComponent;
  let fixture: ComponentFixture<MultyLanguageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultyLanguageTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultyLanguageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
