import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  opacity = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm.patchValue({
      username: 'vader@deathstar.net',
      password: 'padme1991'
    });
    setTimeout(() => {
      this.opacity = 1;
    });
  }

}
