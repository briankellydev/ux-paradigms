import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email = '';
  recoverySent = false;

  constructor() { }

  ngOnInit(): void {
  }

  recover() {
    this.recoverySent = true;
  }

}
