import { Education } from './education.model';
export class TeacherDashboard {
    id:number;
    firstname:string;
    lastname:string;
    qualification:string;
    age:number;
    subjects:string;
    email:any;
    phone:number;
    gender:string;
    experience:string;
    standard:string;
    education:Education[];
}