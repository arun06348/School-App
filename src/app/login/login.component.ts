import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean=false;
  loginForm:FormGroup; 
  name:string;
  Token: any;
  Auth: any;

  constructor(public router:Router,
    public service:LoginService) { }

  ngOnInit(): void {
    
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
    // this.name=this.email.value;
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit()
  { 
    this.isLoggedIn=true
        // this.service.login();  
    // console.log("logincomponent");
    console.log("email:",this.email.value,"  password:",this.password.value);
    // this.authservice.login();
   this.name=this.email.value 
    // this.router.navigate(['/src/app/shared/shared.module.ts'])
    // this.name=this.email.value
    this.router.navigate(['/dashboard']);
      
    // this.change.emit({
    //   user:'arun'
    // })
    
  }
  onCancel(){
    this.loginForm.reset();
  }

}

// export interface LoggedInUserEventArgs{
//   email:string;
// }