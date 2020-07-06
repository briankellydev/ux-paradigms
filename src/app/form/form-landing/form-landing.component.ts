import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-landing',
  templateUrl: './form-landing.component.html',
  styleUrls: ['./form-landing.component.scss']
})
export class FormLandingComponent implements OnInit {

  loading = false;

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    nickname: [''],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    shirtSize: [''],
    favoriteColor: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  reset() {
    this.form.reset();
  }

  submit() {
    this.loading = true;
  }

}
