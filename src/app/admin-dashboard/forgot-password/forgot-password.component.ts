import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm :FormGroup
  constructor(fb : FormBuilder) { 
    this.forgotPasswordForm = fb.group({
      email: ['', Validators.email]
    })
  }

  ngOnInit(): void {
  }

  changePassword(){
    console.log('password changed')
  }
}
