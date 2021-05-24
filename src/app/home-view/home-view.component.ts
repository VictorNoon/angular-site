import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  backgroundImage: HTMLElement | null;
  bodyElem: HTMLElement | null;
  topImage: HTMLElement | null;
  topImageHeight: number;

  constructor() { 
    this.backgroundImage = null;
    this.bodyElem = null;
    this.topImage = null;
    this.topImageHeight = 0;
  }

  ngOnInit(): void {
    this.backgroundImage = document.getElementById("body-background-image");
    this.bodyElem = document.getElementById("body");
    this.topImage = document.getElementById("top-image");
    if (this.topImage != null)
      this.topImageHeight = parseInt(window.getComputedStyle(this.topImage).height);
    this.ResizeBackground();
  }

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = "red";

  @HostListener('window:resize') ResizeBackground() {
    var height=0;
    if (this.bodyElem)
      height = this.bodyElem.offsetHeight; 
    if (this.backgroundImage != null) {
      this.backgroundImage.style.height = (height).toString()+"px";
    }
  }

}
