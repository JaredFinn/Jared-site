import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  onSubmit() {
    const formData = this.contactForm.value;

    // Add the form name to the formData object
    formData['form-name'] = 'contact-form';

    const url = 'jaredfinn.netlify.app'; // replace with your Netlify form ID
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams({ fromObject: formData }).toString();

    this.http.post(url, body, { headers }).subscribe(
      response => console.log('Form submission successful:', response),
      error => console.error('Form submission error:', error)
    );
  }
}

