import { TeacherService } from './../c-teacher/teacher.service';
import { CTeacherComponent } from './../c-teacher/c-teacher.component';
import { TeacherDashboard } from './teacher-dashboard.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { firestore } from 'firebase';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  // teacher:TeacherDashboard;
  // id:TeacherService;
  teacherObj:CTeacherComponent;
  teacher: TeacherDashboard[] = [];
  teacherForm:CTeacherComponent;
   constructor(private route: ActivatedRoute,
               public router:Router,
               private teacherService:TeacherService
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
    console.log('teacher is',teacher)
    this.teacherService.deleteTeacher(teacher.id).subscribe(()=>
    {this.getAllTeacher();}
    )
  }
  editTeacher(teacher){
    this.teacherObj=teacher ;
    this.router.navigate(['/cTeacher',this.teacher]);
    
  }
  goToDetails(item){
    this.router.navigate(['/cTeacher'])
  }
    // console.log('teacher form :'+this.teacherForm);
    // this.teacherService.deleteTeacher(this.teacher).subscribe(()=>{
    //   this.router.navigate(['/dashboard/teacherdashboard']); 
    //   console.log("teacher added successfully");         

}