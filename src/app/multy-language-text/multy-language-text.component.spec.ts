import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultyLanguageTextComponent } from './multy-language-text.component';
import { LanguageService } from './../services/language.service';


describe('MultyLanguageTextComponent', () => {
  let component: MultyLanguageTextComponent;
  let fixture: ComponentFixture<MultyLanguageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultyLanguageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultyLanguageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
