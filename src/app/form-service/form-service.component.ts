import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';


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

  onSubmit(form: NgForm) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(form.value)) {
      formData.append(key, value as string);
    }

    this.http.post('/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      observe: 'response'
    }).subscribe(response => {
      if (response.status === 200) {
        // Handle success response
        console.log('Form submission successful');
      } else {
        // Handle error response
        console.log('Form submission failed');
      }
    }, error => {
      // Handle network error
      console.error('Form submission failed:', error);
    });
  }


  //   // Add the form name to the formData object
  //   formData['form-name'] = 'contact-form';

  //   const params = new HttpParams({
  //     fromObject: formData
  //   });

  //   this.http.post('/', params.toString(), {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   }).subscribe(response => {
  //     console.log('Post request response:', response);
  //   }, error => {
  //     console.error('Post request error:', error);
  //   });
  // }
}

