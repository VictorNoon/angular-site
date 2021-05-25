import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDisplayCardComponent } from './skill-display-card.component';

describe('SkillDisplayCardComponent', () => {
  let component: SkillDisplayCardComponent;
  let fixture: ComponentFixture<SkillDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
