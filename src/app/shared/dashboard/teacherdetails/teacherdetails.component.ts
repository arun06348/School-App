import { TeacherDashboard } from './../teacher-dashboard/teacher-dashboard.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.scss']
})
export class TeacherdetailsComponent implements OnInit {
teacher:TeacherDashboard;
  constructor() { }

  ngOnInit(): void {
  }

}
