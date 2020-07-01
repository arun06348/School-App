// import { TeacherDashboard } from './../teacher-dashboard/teacher-dashboard.model';
import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { TeacherService } from '../c-teacher/teacher.service';
@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.scss']
})
export class TeacherdetailsComponent implements OnInit {
// teacher:TeacherDashboard[]=[];
// @Input() details:TeacherDashboard
// @Output() display=new EventEmitter()
  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
  }
  //  displayChanges(details){
  //    var teacher= details;
  //  }
}
