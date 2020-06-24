import { TeacherDashboard } from './../teacher-dashboard/teacher-dashboard.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
private url='http://localhost:3000/teacher'
  httpClient: any;
  teacher: any;

  constructor(private http:HttpClient,
              private router:Router) { }

  getTeacher(): Observable<TeacherDashboard[]> {
    return this.http.get<TeacherDashboard[]>(this.url);
  }

  getTeacherById(id: number) {}

  addTeacher(teacher) {
    return this.http.post(this.url,teacher);
  }
  // deleteTeacher() {  
  //   this.http.delete(this.url + '/' + this.teacher.id)  
  //     .subscribe(teacher => {  
  //       let index = this.teacher.indexOf(teacher);  
  //       this.teacher.splice(index, 1);  
  //     });  
  // }  
  deleteTeacher(teacherId){
    console.log("service delete",teacherId)
    return this.http.delete(this.url+'/'+teacherId);
  }

}
