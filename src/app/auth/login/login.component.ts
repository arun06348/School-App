import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  name:string;
  Token: any;
  Auth: any;
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit()
  {
    console.log("email:",this.email.value,"  password:",this.password.value);
    // this.router.navigate(['/src/app/shared/shared.module.ts'])
    // this.name=this.email.value
    this.router.navigate(['/dashboard'],this.email.value)
  }
  onCancel(){
    this.loginForm.reset();
  }

}