import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { CTeacherComponent } from './c-teacher/c-teacher.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { MiscellaneousDashboardComponent } from './miscellaneous-dashboard/miscellaneous-dashboard.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { ClassDashboardComponent } from './class-dashboard/class-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';

const routes: Routes = [
      {path:'',
      component:DashboardComponent},
      {
        path:'schooldashboard',
        component:SchoolDashboardComponent
      },
      {
        path:'teacherdashboard',
        component:TeacherDashboardComponent
      },
      {
        path:'studentdashboard',
        component:StudentDashboardComponent
      },
      {path:'classdashboard',
      component:ClassDashboardComponent
      },
    {
      path:'inventorydashboard',
      component:InventoryDashboardComponent
    },
    {
      path:'miscellaneousdashboard',
      component:MiscellaneousDashboardComponent
    },
    {
      path:'cTeacher',
      component:CTeacherComponent
    },
    {
      path:'teacherdetails',
      component:TeacherdetailsComponent
    },
    {
      path:'teacher/edit/:id',
      component:CTeacherComponent
    }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
