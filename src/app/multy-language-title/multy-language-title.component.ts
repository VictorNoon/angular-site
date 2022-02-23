import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from './../services/language.service';

@Component({
  selector: 'app-multy-language-title',
  templateUrl: './multy-language-title.component.html',
  styleUrls: ['./multy-language-title.component.scss'],
})
export class MultyLanguageTitleComponent implements OnInit {
  languageServiceSubscription: Subscription;
  siteLanguage: string;

  @Input() frTitle: string;
  @Input() enTitle: string;
  displayedTitle: string;

  constructor(languageService: LanguageService) {
    this.frTitle = 'err';
    this.enTitle = 'err';
	this.siteLanguage = 'err';
    this.displayedTitle = 'unassigned';
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
  }

  updateTextLanguage()
  {
	if (this.siteLanguage == 'en')
	  	this.displayedTitle = this.enTitle;
	else
		this.displayedTitle = this.frTitle;
  }

  ngOnInit(): void {
    this.updateTextLanguage();
  }
}
