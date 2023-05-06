import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss']
})
export class FormServiceComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      proposal: ['', Validators.required]
    });
  }

  handleSubmit(event: any): void {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.set(key, value as string);
    });

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('https://app.netlify.com/sites/jaredfinn/forms/contact', body.toString(), { headers })
      .subscribe(() => console.log('Message sent successfully!'),
        (error) => console.error(error));
  }
}


