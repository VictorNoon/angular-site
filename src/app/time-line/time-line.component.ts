import { TimeLineEntryComponent } from './../time-line-entry/time-line-entry.component';
import { Component, OnInit } from '@angular/core';

class TimeLineEntryData {
  title :string;
  date: string | null;
  content: string;

  constructor(title :string, date :string | null, content:string) {
    this.title = title;
    this.date = date;
    this.content = content;
  }
}

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  entries :TimeLineEntryData[] = [new TimeLineEntryData("DUT - GEII", "2012", "Formation en électricité électronique et informatique industriel."),
                                  new TimeLineEntryData("Ecole 42", "2015", "Formation en Informatique."),
                                  new TimeLineEntryData("Magic Makers", "2019", "Enseignement de l'informatique aux enfants et adolescents")];
  constructor() {
  }

  ngOnInit(): void {
  }

}
