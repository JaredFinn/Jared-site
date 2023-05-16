import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, transition, animate, style } from '@angular/animations';
import 'animate.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('dividerHeading', {static: true}) dividerHeading!: ElementRef;

  name: string = '';
  email: string = '';
  phone: string = '';
  proposal: string = '';

  submitted: boolean = false;

  view = { type: '' };
  word = { skill: ['Websites', 'Apps', 'Data Management', 'Automation', ''] };
  
  idx = 0;
  n = 0;
  up = true;

  boxes = [
    {
      imageUrl: '../assets/Jared_Cows.jpg',
      buttonText: 'Button 1'
    },
    {
      imageUrl: 'path/to/image2.jpg',
      buttonText: 'Button 2'
    },
    {
      imageUrl: 'path/to/image3.jpg',
      buttonText: 'Button 3'
    },
    // add more boxes here
  ];

  constructor() {
    setInterval(() => {
      const word = this.word.skill[this.idx];
      const ln = word.length;

      if (this.up) {
        this.view.type = word.slice(0, this.n);
        this.n++;
      }
      if (this.n === ln + 1) {
        this.up = false;
      }
      if (!this.up) {
        this.view.type = word.slice(0, this.n);
        this.n--;
      }
      if (this.n === 0) {
        this.up = true;
        this.idx++;
      }
      if (this.idx === this.word.skill.length) {
        this.idx = 0;
      }
    }, 200);
  }


  drop: boolean = false;


  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: .1
    };

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.dividerHeading.nativeElement.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
    }, options);

    observer.observe(this.dividerHeading.nativeElement);
    setTimeout(() => {
      this.drop = true;
    }, 4000);

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
