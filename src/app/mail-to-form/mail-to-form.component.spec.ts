import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToFormComponent } from './mail-to-form.component';

describe('MailToFormComponent', () => {
  let component: MailToFormComponent;
  let fixture: ComponentFixture<MailToFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailToFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
