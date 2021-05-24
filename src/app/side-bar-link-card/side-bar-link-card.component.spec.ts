import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLinkCardComponent } from './side-bar-link-card.component';

describe('SideBarLinkCardComponent', () => {
  let component: SideBarLinkCardComponent;
  let fixture: ComponentFixture<SideBarLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarLinkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
