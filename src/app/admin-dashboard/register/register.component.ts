import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  constructor(fb : FormBuilder) {
    this.registerForm = fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email:['', Validators.email],
      password:['', Validators.required],
      repeatPassword:['', Validators.required]
    })
   }

  ngOnInit(): void {

  }
  registerUser(){
    
  }
}
