import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { AboutComponent } from './shared/about/about.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule, Component } from '@angular/core';

const routes: Routes = [
//   {path:'',component:HomeComponent},
//   {path:'dashboard',
// loadChildren:()=> import ('./shared/dashboard/dashboard.module').then(a=>a.DashboardModule)
// },
//   {path:'home',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'contactus',component:ContactusComponent},
  // {path:'login',component:LoginComponent},
 
  {
    path:'',
    loadChildren:()=>
    import('./auth/auth.module').then(s=>s.AuthModule),
  
  },
  //{path:'**',redirectTo:'home'}
  // {
  //   path:'',
  //   loadChildren:()=>
  //   import('./shared/shared.module').then(a=>a.SharedModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
