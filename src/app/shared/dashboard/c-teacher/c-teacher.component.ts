import { TeacherDashboard } from './../teacher-dashboard/teacher-dashboard.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TeacherService } from './teacher.service';
@Component({
  selector: 'app-c-teacher',
  templateUrl: './c-teacher.component.html',
  styleUrls: ['./c-teacher.component.css']
})
export class CTeacherComponent implements OnInit {

  standardType = [
    {value : 'Pre-Primary' },
    {value : 'Primary' },
    {value : 'High School' }
  ]

  genderType = [
    {value1 : 'Male' },
    {value1 : 'Female' },
    {value1 : 'Others' }
  ]
  teacherForm: FormGroup;
  // teacherservice: any;
  allTeacher: Object;
  
  teacherObj={
    firstname:'',
      lastname:'',
      qualification:'',
      age:'',
      subjects:'',
      email:'',
      phone:'',
      gender:'',
      experience:'',
      standard:''
  }
  
  constructor( public fb: FormBuilder,
                public router:Router,
                private http:HttpClient,
                private teacherService:TeacherService
                ) { }

  ngOnInit():void {
    this.teacherForm = this.fb.group({ 
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      age: ['', Validators.required],
      experience: ['', Validators.required],
      qualification: ['', Validators.required],
      gender: ['', Validators.required],
      standard: ['', Validators.required],
      subjects: ['', Validators.required]      
    });
  }
  get firstname(){
    return this.teacherForm.get('firstname');
  }
   get lastname(){
    return this.teacherForm.get('lastname');
  }
  get email(){
    return this.teacherForm.get('email');
  }
  get phone(){
    return this.teacherForm.get('phone');
  }
  get age(){
    return this.teacherForm.get('age');
  }
  get experience(){
    return this.teacherForm.get('experience');
  }
  get qualification(){
    return this.teacherForm.get('qualification');
  }
  get gender(){
    return this.teacherForm.get('gender');
  }
  get standard(){
    return this.teacherForm.get('standard');
  }
  get subjects(){
    return this.teacherForm.get('subjects');
  }

  // addTeacher(teacherData:{ 
  //   firstname:string;
  //   lastname:string;
  //   qualification:string;
  //   age:number;
  //   subjects:string;
  //   email:any;
  //   phone:number;
  //   gender:string;
  //   experience:string;
  //   standard:string;}){
  //   this.http.post('https://school-app-d8974.firebaseio.com/teacher.json',teacherData).subscribe(responseData =>{
  //   console.log(JSON.stringify(responseData));
    
  //   });
  // }
// create(){
//   console.log('Submitted Form : ' + JSON.stringify(this.teacherForm.value));
//   this.router.navigate(['/dashboard/teacherdashboard'])
// }
  
  addTeacher(){
    console.log('teacher form :'+JSON.stringify(this.teacherForm.value));
    this.teacherService.addTeacher(this.teacherForm.value).subscribe(()=>{
      this.router.navigate(['/dashboard/teacherdashboard']); 
      console.log("teacher added successfully");        
    });
}
standardChange(index) {
  console.log(this.standardType[index]);
}
genderChange(index1) {
  console.log(this.genderType[index1]);
} 
}
