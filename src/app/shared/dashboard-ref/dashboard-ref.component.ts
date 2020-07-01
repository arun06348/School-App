import { Router } from '@angular/router';
import { Dashboard } from './../dashboard/dashboard.model';
  import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SectionName } from '../dashboard/section-name.enum';

@Component({
  selector: 'app-dashboard-ref',
  templateUrl: './dashboard-ref.component.html',
  styleUrls: ['./dashboard-ref.component.scss']
})
export class DashboardRefComponent implements OnInit {
  constructor( private router:Router)  { }
  @Input() item:Dashboard;
  // @Output() section=new EventEmitter()
  ngOnInit(): void {
  }

  navigateTo(item:Dashboard){
    switch(item.section){
      case  SectionName.School:this.router.navigate(["/dashboard/schooldashboard"])
                    break;
      case SectionName.Teacher:this.router.navigate(["/dashboard/teacherdashboard"])
                    break;
      case SectionName.Student:this.router.navigate(["/dashboard/studentdashboard"])
                    break;
      case SectionName.Classes:this.router.navigate(["/dashboard/classdashboard"])
                    break;
      case SectionName.Inventory:this.router.navigate(["/dashboard/inventorydashboard"])
                    break;
      case SectionName.Miscellaneous:this.router.navigate(["/dashboard/miscellaneousdashboard"])
                    break;
    }
  }
}
