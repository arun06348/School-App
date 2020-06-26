import { Observable } from 'rxjs';
import { TeacherService } from './../c-teacher/teacher.service';
import { CTeacherComponent } from './../c-teacher/c-teacher.component';
import { TeacherDashboard } from './teacher-dashboard.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { firestore } from 'firebase';
import { AlertifyService } from '../alertify.service';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  // teacher:TeacherDashboard;
  // id:TeacherService;
  teacherObj:any;
  msg:String = '';
  teacher: TeacherDashboard[] = [];
  teacherForm:CTeacherComponent;
   constructor(private route: ActivatedRoute,
               public router:Router,
               private teacherService:TeacherService,
               public alertify: AlertifyService

               ) { }

   ngOnInit(): void {
     this.getAllTeacher();
    // this.route.queryParams.subscribe((a: TeacherDashboard) => {
    //   this.teacher = a;
    //   console.log('teacher profie is '+ JSON.stringify(this.teacher));
    // });
  }
  createTeacher() {
    this.router.navigate(['/cTeacher']);

  }
  getAllTeacher(){
    this.teacherService.getTeacher().subscribe((t)=>(this.teacher=t));
  }
  // deleteTeacher(){
  //   this.teacherService.getTeacherById().((t)=>(this.teacher=t));
  // }

  deleteTeacher(teacher:TeacherDashboard){
    this.alertify.ConfirmDialog(
      'deleteTeacher',
      'Are you sure want to Delete',
      'Deleted Successfully',
      'Cancelled',
      teacher.id
    );
    this.getAllTeacher();
    console.log('teacher is',teacher)
      this.teacherService.deleteTeacher(teacher.id).subscribe(()=>
          {this.getAllTeacher();})
    }
    editTeacher(item){
      this.teacherObj=item ;
      this.router.navigate(['/cTeacher'],item);
      
    }    
    goToDetails(item){
      this.router.navigate(['/dashboard/teacherdetails'],item)
    }
      // console.log('teacher form :'+this.teacherForm);
      // this.teacherService.deleteTeacher(this.teacher).subscribe(()=>{
      //   this.router.navigate(['/dashboard/teacherdashboard']); 
      //   console.log("teacher added successfully");         

  }