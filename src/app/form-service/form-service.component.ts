import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

    const params = new HttpParams({
      fromObject: formData
    });

    this.http
    .post("/", params.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      responseType: "text",
    })
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = "";

    if (err.error instanceof ErrorEvent) {
      errMsg = `Client-side error: ${err.error.message}`;
    } else {
      errMsg = `Server-side error. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}

