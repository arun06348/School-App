import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName:string;
  title = 'school-app';
  isLoggedIn:boolean = false;
  isCollapsed = true;
  @Input() user:string
  @Output() change: EventEmitter<string>=new EventEmitter<string>();
  isUserLogged=false;
  // email:LoggedInUserEventArgs;
  constructor()
  {}
  logout(){
    
  }
  

  ngOnInit(): void {
    // this.userName=this.user.name;

  }

}
