import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wizard-landing',
  templateUrl: './wizard-landing.component.html',
  styleUrls: ['./wizard-landing.component.scss']
})
export class WizardLandingComponent implements OnInit {

  firstFormGroup = this.fb.group({
    feelings: ['', Validators.required]
  });

  secondFormGroup = this.fb.group({
    q1: ['', Validators.required],
    q2: ['', Validators.required],
    q3: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
