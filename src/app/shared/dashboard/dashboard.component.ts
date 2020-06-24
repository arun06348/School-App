import { SectionName } from './section-name.enum';
import { Dashboard } from './dashboard.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const Element_Name:Dashboard[]=[
  {image:"https://tnt.sgp1.cdn.digitaloceanspaces.com/uploads/2019/12/schools_1177.jpg",section:SectionName.School,description:"click the button below to navigate to the school dashboard",button:"School Dashboard",color:" btn-outline-primary",txtcolor:"text-primary"},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmuT4q-3zogK2fg3OHS78AACGyvgb9IS6mnQcdm-wdItwCUKNc&usqp=CAU",section:SectionName.Teacher,description:"click the button below to navigate to the teacher dashboard",button:"Teacher Dashboard",color:" btn-outline-danger",txtcolor:"text-danger"},
  {image:"https://images.financialexpress.com/2020/04/1-89.jpg",section:SectionName.Student,description:"click the button below to navigate to the student dashboard",button:"Student Dashboard",color:"btn-outline-info",txtcolor:"text-info"},
  {image:"https://www.novinite.com/media/images/2019-09/photo_verybig_200112.jpg",section:SectionName.Classes,description:"click the button below to navigate to the classes dashboard",button:"Classes Dashboard",color:"btn-outline-success",txtcolor:"text-success"},
  {image:"https://i0.wp.com/blogue.cascades.com/wp-content/uploads/2015/08/inventory_school_supplies.jpg?resize=620%2C400",section:SectionName.Inventory,description:"click the button below to navigate to the inventory dashboard",button:"Inventory Dashboard",color:"btn-outline-secondary",txtcolor:"text-secondary"},
  {image:"https://clipartstation.com/wp-content/uploads/2017/11/co-curricular-activities-clipart.bmp",section:SectionName.Miscellaneous,description:"click the button below to navigate to the miscellaneous dashboard",button:"Miscellaneous Dashboard",color:"btn-outline-warning",txtcolor:"text-warning"},
]
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource = Element_Name;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateTo(item:Dashboard){
    // if(item.section=="School"){
    //     this.router.navigate(["/dashboard/schooldashboard"])
    // }
    // else if(item.section=="Teacher"){
    //   this.router.navigate(["/dashboard/teacherdashboard"])
    // }
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
