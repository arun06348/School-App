import { LoginComponent } from './login.component';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn=new EventEmitter();
  email:LoginComponent;
  
  // user:LoggedInUserEventArgs={
    // user:""
  // }
  constructor() { }
  login(){
    console.log("login service");
    // this.user.user=this.email
    this.isLoggedIn.emit(this.email);
  }
}