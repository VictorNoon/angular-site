import { LanguageService } from './../services/language.service';
import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

class LinkCard {
  cardStyle: string;
  cardLink: string;
  cardText: string;

  constructor(cardStyle :string, cardLink:string, cardText: string) {
    this.cardStyle = cardStyle;
    this.cardLink = cardLink;
    this.cardText = cardText;
  }
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss', '../../assets/color_scheme.scss']
})
export class TopBarComponent implements OnInit {

  languageServiceSubscription: Subscription;

  siteLanguage :string = "None";
  nextLanguageBtnText : string = "None";

  cardsText : string[][] = [["Accueil", "Home"],
                            ["Portfolio", "Portfolio"],
                            ["CV", "CV"],
                            ["Contacter", "Contact"]]

  cards: LinkCard[] = [new LinkCard("selected-card", "/home", "Home"),
                      new LinkCard("card", "/portfolio", "Portfolio"),
                      new LinkCard("card", "/cv", "CV"),
                      new LinkCard("card", "/mail-to", "Contact")]

  constructor(private languageService: LanguageService) {
    this.languageServiceSubscription = languageService.languageServiceSubject.subscribe(
      (languageServiceResponseArray :string[]) => {
        this.siteLanguage = languageServiceResponseArray[0];
        this.nextLanguageBtnText = languageServiceResponseArray[1];
        this.updateCardText()
      },
      (error: any) => {
        console.log("An Error occured !!" + error)
        this.siteLanguage = "Error"
        this.nextLanguageBtnText = "Error";
      }
    )
    languageService.emitlanguageServiceSubject();
  }

  ngOnInit(): void {

  }

  private updateCardText() {
    var index = 0;
    var languageSelector : number;

    if (this.siteLanguage == 'en')
      languageSelector = 1;
    else
      languageSelector = 0;

    this.cards.forEach(card => {
      card.cardText = this.cardsText[index][languageSelector];
      index++;
    }); 
  }

  onChangePage(){
    console.log("link clicked");
    console.log(window.location.href)
  }

  onChangeLanguage() : void {
    this.languageService.switchToNextLanguage();
  }
}
