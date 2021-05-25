import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-time-line-entry',
  templateUrl: './time-line-entry.component.html',
  styleUrls: ['./time-line-entry.component.scss']
})
export class TimeLineEntryComponent implements OnInit {

  hasDate = false;
  @Input() displayStyle: string = "dotLeft";
  @Input() entry:TimeLineEntryData;

  constructor() {
    this.entry = new TimeLineEntryData("err", null, "...");
  }

  ngOnInit(): void {
    if (this.entry.date != null) {
      this.hasDate = true;
    }
  }
}
