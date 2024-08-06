import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  texts = ["MAKE BUSINESS SIMPLE", "MAKE BUSINESS FLEXIBLE", "MAKE BUSINESS EASY"];
  currentIndex = 0;
  currentText = this.texts[this.currentIndex];

  // constructor() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.texts.length;
  //     this.currentText = this.texts[this.currentIndex];
  //   }, 3000); 
  // }

}
