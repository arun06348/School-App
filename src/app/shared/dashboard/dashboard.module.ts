import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CTeacherComponent } from './c-teacher/c-teacher.component';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ClassDashboardComponent } from './class-dashboard/class-dashboard.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { MiscellaneousDashboardComponent } from './miscellaneous-dashboard/miscellaneous-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
   declarations: [
    SchoolDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ClassDashboardComponent,
    InventoryDashboardComponent,
    MiscellaneousDashboardComponent,
    CTeacherComponent,
    TeacherdetailsComponent
  ],
  imports:[
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule
]
})
export class DashboardModule { }
