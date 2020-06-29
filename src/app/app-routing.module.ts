import {Routes, RouterModule} from '@angular/router'
import { ContactusComponent } from './shared/contactus/contactus.component';
import { AboutComponent } from './shared/about/about.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
//   {path:'',component:HomeComponent},
//   {path:'dashboard',
// loadChildren:()=> import ('./shared/dashboard/dashboard.module').then(a=>a.DashboardModule)
// },
  // {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  // {path:'contactus',component:ContactusComponent},
  
 
  {
    path:'',
    loadChildren:()=>
    import('./shared/shared.module').then(a=>a.SharedModule),
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'**',redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
