import { LanguageService } from './../services/language.service';
import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-top-bar-link-card',
  templateUrl: './top-bar-link-card.component.html',
  styleUrls: ['./top-bar-link-card.component.scss']
})
export class TopBarLinkCardComponent implements OnInit {

  language : string | undefined;

  @Input() card: LinkCard;

  constructor(private languageService: LanguageService) {
    this.card = new LinkCard("card", "#", "Error Card");
  }

  ngOnInit(): void {
    console.log(this.card)
  }

  getStyle() :string {
    if (window.location.href.split("/").pop() == this.card.cardLink.substr(1)) {
      return ("selected-card");
    }
    else
      return ("card");
  }
}
