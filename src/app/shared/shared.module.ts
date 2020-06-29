
import { SharedRoutingModule } from './shared-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { DashboardRefComponent } from './dashboard-ref/dashboard-ref.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    DashboardRefComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    MatSelectModule,
  ]
})
export class SharedModule { }
