import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    return localStorage.removeItem('currentUser');
  }

}