import { Component } from '@angular/core';
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
