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
      'DUT - GEII (Génie Électrique et Informatique Industrielle)',
      '2012 - 2014',
      'Formation en électricité électronique et informatique industriel. \n\nDiplôme obtenu.\n\nContenu de la formation:\n' +
        'Création de cartes électroniques\nÉlectrotechnique\nProgrammation sur automates industriels\n' +
        'Programmation sur microcontrôleur\nApprentissage des languages: C, C++, Verilog.\n\n' +
		'Stage de fin de DUT: Création de systems de supervision de station de traitement des eaux.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2015 - 2018',
      'Formation généraliste en informatique.\n\n' +
        'Contenu de la formation:\n' +
        'Apprentissage des languages: C, C++, C#, HTML, CSS, Python\n' +
        'Apprentissage des outils: Git, Unity\n' +
        'Problématiques des projets: Création de VM, IA, Sécurité, Game Design\n\n' +
		'Stage de mi-cursus: Réalisation d\'un logiciel de modélisation et d\'évaluation des risques de sécurité.'
    ),
    new TimeLineEntryData(
      'Magic Makers',
      '2019 - 2021',
      "Enseignement de l'informatique aux enfants et adolescents.\n\n" +
	  'Missions exercées:\n' +
	  'Création de ressources pédagogiques en informatique (Python, HTML/CSS, C#, Unity)'+
	  ' sous forme de documents texte ou site.\n' +
	  'Gestion des relations partenaire, gestions du matériel, relation avec les clients.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2021',
      'Formation généraliste en Informatique. Dernière année de formation.\n\n' +
        'Spécialisation sur:\n' +
        'Les languages: C, C++, C#\n' +
        'Les outils: Git, Unity\n' +
        'Les domaines: IA, Game Design'
    ),
  ];

  enEntries: TimeLineEntryData[] = [
    new TimeLineEntryData(
      'DUT - GEII',
      '2012 - 2014',
      'Training in electronic electricity and industrial computing. \nDegree obtained.\n\nTraining content:\n' +
        'Creation of electronic cards\nElectrical engineering\nProgramming on industrial automatons\n' +
        'Microcontroller programming\nComputer languages: C, C++, Verilog.\n\n' +
		'Final internship: Development of supervision software for water plant.'
    ),
    new TimeLineEntryData(
      'School 42 - Paris',
      '2015 - 2018',
      'General IT training.\n\n' +
        'Training content:\n' +
        'Computer languages: C, C++, C#, HTML, CSS, Python, JAVA\n' +
        'Tools: Git, Unity\n' +
        'Fields studied: creation of virtual machines, IA, Security, Game Design, OOD, TDD'
    ),
    new TimeLineEntryData(
      'Magic Makers',
      '2019 - 2021',
      "Teaching computer science to children and teenagers.\n\n" +
	  'Tasks:\n' +
	  'Creation of educational resources in computer science (Python, HTML/CSS, C#, Unity)'+
	  ' in the form of text documents or sites.\n' +
	  'Partner relationship management, equipment management, customer relationship.'
    ),
    new TimeLineEntryData(
      'Ecole 42',
      '2021',
      'General IT training - Last year of training.\n\n' +
        'Specialization in:\n' +
        'Languages: C, C++, C#\n' +
        'Tools: Git, Unity\n' +
        'Fields of study: IA, Game Design'
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
