import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailToViewComponent } from './mail-to-view.component';

describe('MailToViewComponent', () => {
  let component: MailToViewComponent;
  let fixture: ComponentFixture<MailToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
