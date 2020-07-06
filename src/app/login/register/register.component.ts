import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required, this.passwordComplexityValidator.bind(this)],
    passwordConfirm: ['', Validators.required, this.passwordMatchValidator.bind(this)]
  });
  registered = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    this.registered = true;
  }

  private passwordMatchValidator(confirmPassword: FormControl) {
    return of(
      confirmPassword.value === this.registerForm.value.password ?
        null : {passwordMismatch: true}
      );
  }

  private passwordComplexityValidator(password: FormControl) {
    const lengthTest = password.value.length > 7;
    const hasUpperCase = /[A-Z]/.test(password.value);
    const hasLowerCase = /[a-z]/.test(password.value);
    const hasNumbers = /\d/.test(password.value);
    const hasNonalphas = /\W/.test(password.value);
    const allTestsPass = lengthTest && hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas;
    return of(allTestsPass ? null : {passwordComplexity: true});
  }

}
