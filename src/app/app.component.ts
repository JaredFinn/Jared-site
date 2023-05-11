import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = '';
  email: string = '';
  phone: string = '';
  proposal: string = '';

  submitted: boolean = false;

  constructor() {}

  @ViewChild('introSection', {static: true}) introSection!: ElementRef;
  @ViewChild('serviceTitle', {static: true}) serviceTitle!: ElementRef;
  @ViewChild('serviceRows', {static: true}) serviceRows!: ElementRef;
  @ViewChild('contact', {static: true}) contact!: ElementRef;

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: .1
    };
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.introSection.nativeElement.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.serviceRows.nativeElement.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.serviceTitle.nativeElement.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const observer4 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.contact.nativeElement.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.introSection.nativeElement);
    observer2.observe(this.serviceRows.nativeElement);
    observer3.observe(this.serviceTitle.nativeElement);
    observer4.observe(this.contact.nativeElement);
  }

  sendEmail() {
    // const subject = 'Inquiry';
    // const message = {
    //   name: this.name,
    //   email: this.email,
    //   phone: this.phone,
    //   proposal: this.proposal
    // };
    this.submitted = true;
    // console.log(message)
    // this.emailService.sendEmail(subject, message).subscribe(response => {

    //   console.log(response);
    // });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
