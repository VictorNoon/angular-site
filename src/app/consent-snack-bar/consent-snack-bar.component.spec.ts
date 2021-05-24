import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentSnackBarComponent } from './consent-snack-bar.component';

describe('ConsentSnackBarComponent', () => {
  let component: ConsentSnackBarComponent;
  let fixture: ComponentFixture<ConsentSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
