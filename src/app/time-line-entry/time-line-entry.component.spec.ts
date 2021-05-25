import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineEntryComponent } from './time-line-entry.component';

describe('TimeLineEntryComponent', () => {
  let component: TimeLineEntryComponent;
  let fixture: ComponentFixture<TimeLineEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
