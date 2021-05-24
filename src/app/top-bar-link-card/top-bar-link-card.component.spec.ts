import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLinkCardComponent } from './top-bar-link-card.component';

describe('TopBarLinkCardComponent', () => {
  let component: TopBarLinkCardComponent;
  let fixture: ComponentFixture<TopBarLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarLinkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
