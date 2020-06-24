import { CTeacherComponent } from './dashboard/c-teacher/c-teacher.component';
import { LoginComponent } from './../auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {path:'dashboard',
  loadChildren:()=> import ('./dashboard/dashboard.module').then(a=>a.DashboardModule)
  },
  {
    path:'cTeacher',
    component:CTeacherComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
