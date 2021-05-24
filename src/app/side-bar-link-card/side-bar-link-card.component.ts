import { LanguageService } from './../services/language.service';
import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-side-bar-link-card',
  templateUrl: './side-bar-link-card.component.html',
  styleUrls: ['./side-bar-link-card.component.scss']
})
export class SideBarLinkCardComponent implements OnInit {

  language : string | undefined;

  @Input() card: LinkCard;

  constructor(private languageService: LanguageService) {
    this.card = new LinkCard("card", "#", "Error Card", "");
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
  toSection() 
  {
    var section = document.getElementById(this.card.cardSectionId);
    if (section != null)
    {
      section.scrollIntoView({behavior:"smooth"});
    }
  }
}
