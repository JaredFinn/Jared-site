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

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.introSection.nativeElement.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.introSection.nativeElement);
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
