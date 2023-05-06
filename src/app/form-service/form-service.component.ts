import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss']
})
export class FormServiceComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      proposal: ['', Validators.required]
    });
  
    // Add name attributes to form controls for Netlify
    const controls = this.contactForm.controls;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].setErrors({ 'name': key });
      }
    }
  }

  

  handleSubmit(event: Event): void {
    event.preventDefault();

    const formData = new FormData();
    formData.append('form-name', 'contact');

    const formValue = this.contactForm.value;
    Object.keys(formValue).forEach((key) => {
      formData.append(key, formValue[key]);
    });

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('/', new URLSearchParams(formData as any).toString(), { headers, responseType: 'text' })
   .subscribe(() => console.log('Message sent successfully!'),
     (error) => console.error(error));

  }
}


