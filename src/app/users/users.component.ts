import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users:any;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.getAllUsers()
  }


  getAllUsers()
  {
    this.userService.getusers().subscribe((data)=>
    {
            this.users=  data.map((e:any)=>
              {
                return {
                  id:e.payload.doc.id,
                  ...e.payload.doc.data()
                }
                
              })
    })
  }
}
