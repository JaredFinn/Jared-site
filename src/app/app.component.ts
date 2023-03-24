import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name!: string;
  email!: string;
  phone!: string;
  proposal!: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log("Sending Email...")
    // const formData = {
    //   name: this.name,
    //   email: this.email,
    //   phone: this.phone,
    //   proposal: this.proposal
    // };

    // this.http.post('http://localhost:3000/send-email', formData)
    //   .subscribe(() => {
    //     console.log('Email sent successfully');
    //   }, error => {
    //     console.log('Error sending email:', error);
    //   });
  }
}
