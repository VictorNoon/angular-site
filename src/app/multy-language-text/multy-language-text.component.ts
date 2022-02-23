import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from './../services/language.service';

@Component({
  selector: 'app-multy-language-text',
  templateUrl: './multy-language-text.component.html',
  styleUrls: ['./multy-language-text.component.scss'],
})
export class MultyLanguageTextComponent implements OnInit {
  languageServiceSubscription: Subscription;
  siteLanguage: string = 'fr';
  @Input() frTxt: string;
  @Input() enTxt: string;

  displayedText: string;

  constructor(private languageService: LanguageService) {
    this.frTxt = 'Erreur Text introuvable...';
	this.enTxt = 'Error text not found...';
    this.languageServiceSubscription =
      languageService.languageServiceSubject.subscribe(
        (languageServiceResponseArray: string[]) => {
          this.siteLanguage = languageServiceResponseArray[0];
          this.updateTextLanguage();
        },
        (error: any) => {
          console.log('An Error occured !!' + error);
          this.siteLanguage = 'Error';

        }
      );
    this.displayedText = this.GetTextToDisplay();
  }
  GetTextToDisplay(): string {
	if (this.siteLanguage == 'fr')
    	return this.frTxt;
	else
		return this.enTxt;
  }

  updateTextLanguage() {
    this.displayedText = this.GetTextToDisplay();
  }

  ngOnInit(): void {
	this.displayedText = this.GetTextToDisplay();
  }
}
