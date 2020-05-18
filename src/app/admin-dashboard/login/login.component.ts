import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(fb : FormBuilder) {
    this.loginForm = fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.get('username').value)
  }
}
