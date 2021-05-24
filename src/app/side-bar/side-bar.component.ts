import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../services/language.service';
import { style } from '@angular/animations';
import { Subscription } from 'rxjs';

class LinkCard {
  cardStyle: string;
  cardLink: string;
  cardText: string;
  cardSectionId: string;

  constructor(cardStyle :string, cardLink:string, cardText: string, cardSectionId:string) {
    this.cardStyle = cardStyle;
    this.cardLink = cardLink;
    this.cardText = cardText;
    this.cardSectionId = cardSectionId;
  }
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  languageServiceSubscription: Subscription;

  siteLanguage :string = "None";
  nextLanguageBtnText : string = "None";

  cardsText : string[][] = [["Accueil", "Home"],
                            ["Mes créations", "Portfolio"],
                            ["Mes compétences", "CV"],
                            ["Contacter", "Contact"]]

  cards: LinkCard[] = [new LinkCard("selected-card", "/home", "Home", "home-top"),
                      new LinkCard("card", "/home", "Portfolio", "who-am-i"),
                      new LinkCard("card", "/home", "CV", ""),
                      new LinkCard("card", "/home", "Contact", "")]

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
