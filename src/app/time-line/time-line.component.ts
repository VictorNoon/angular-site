import { TimeLineEntryComponent } from './../time-line-entry/time-line-entry.component';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from './../services/language.service';
//import { freemem } from 'os';

class TimeLineEntryData {
  title: string;
  date: string | null;
  content: string;

  constructor(title: string, date: string | null, content: string) {
    this.title = title;
    this.date = date;
    this.content = content;
  }
}

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
	languageServiceSubscription: Subscription;
	siteLanguage: string = 'fr';
  entries: TimeLineEntryData[];

  frEntries: TimeLineEntryData[] = [
    new TimeLineEntryData(
      'DUT - GEII (Génie Electrique et Informatique Industrielle)',
      '2012 - 2014',
      'Formation en électricité électronique et informatique industriel. \nDiplome obtenu.\nContenu de la formation:\n' +
        'Créations de cartes électroniques, électrotechnique, programmation sur automate industriel,' +
        ' programmation sur microcontrôleur, programmation en C, C++, Verilog.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2015 - 2018',
      'Formation généraliste en Informatique.\n' +
        'Contenu de la formation:\n' +
        'Apprentissage des languages: C, C++, C#, HTML, CSS, Python' +
        'Apprentissage des outils: Git, Unity' +
        'Problématiques des projets: création de VM, IA, Securité, Game Design'
    ),
    new TimeLineEntryData(
      'Magic Makers',
      '2019 - 2021',
      "Enseignement de l'informatique aux enfants et adolescents.\n" +
	  'Missions exercés:\n' +
	  'Création de ressources pédagogiques en informatique (Python, HTML/CSS, C#, Unity)'+
	  ' sous forme de documents texte ou site.\n' +
	  'Gestion des relations partenaire, gestions du matériel, relation avec les clients.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2021',
      'Formation généraliste en Informatique.\nDernière année de formation.' +
        'Spécialisation sur:\n' +
        'Les languages: C, C++, C#' +
        'Les outils: Git, Unity' +
        'Problématiques des projets: IA, Game Design'
    ),
  ];

  enEntries: TimeLineEntryData[] = [
    new TimeLineEntryData(
      'DUT - GEII',
      '2012 - 2014',
      'Formation en électricité électronique et informatique industriel. \nDiplome obtenu.\nContenu de la formation:\n' +
        'Créations de cartes électroniques, électrotechnique, programmation sur automate industriel,' +
        ' programmation sur microcontrôleur, programmation en C, C++, Verilog.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2015 - 2018',
      'Formation généraliste en Informatique.\n' +
        'Contenu de la formation:\n' +
        'Apprentissage des languages: C, C++, C#, HTML, CSS, Python' +
        'Apprentissage des outils: Git, Unity' +
        'Problématiques des projets: création de VM, IA, Securité, Game Design'
    ),
    new TimeLineEntryData(
      'Magic Makers',
      '2019 - 2021',
      "Enseignement de l'informatique aux enfants et adolescents.\n" +
	  'Missions exercés:\n' +
	  'Création de ressources pédagogiques en informatique (Python, HTML/CSS, C#, Unity)'+
	  ' sous forme de documents texte ou site.\n' +
	  'Gestion des relations partenaire, gestions du matériel, relation avec les clients.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2021',
      'Formation généraliste en Informatique.\nDernière année de formation.' +
        'Spécialisation sur:\n' +
        'Les languages: C, C++, C#' +
        'Les outils: Git, Unity' +
        'Problématiques des projets: IA, Game Design'
    ),
  ];


  constructor(private languageService: LanguageService) {
	  this.entries = this.frEntries;
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

  ngOnInit(): void {

  }

  updateTextLanguage() {
	if (this.siteLanguage == 'en')
    	this.entries = this.enEntries;
	else
		this.entries = this.frEntries;
  }
}
