import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-display',
  templateUrl: './skill-display.component.html',
  styleUrls: ['./skill-display.component.scss']
})
export class SkillDisplayComponent implements OnInit {

  @Input() skillName :string = "#err";
  @Input() skillLevel :string = "3";
  skillLevelNumVal : number = parseFloat(this.skillLevel);
  skillDisplay: boolean[] =  [false,false, false, false,false, false]

  constructor() { }

  ngOnInit(): void {
    this.skillLevelNumVal = parseFloat(this.skillLevel);
    for (var i = 0; i < this.skillLevelNumVal && i < this.skillDisplay.length; i++)
    {
      this.skillDisplay[i] = true;
    }
  }

}
