import { LoginComponent } from './auth/login/login.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school-app';
  loggedIn:boolean = false;
  isCollapsed = true;
  email:LoginComponent;
}
