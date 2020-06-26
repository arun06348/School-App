import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { TeacherService } from './c-teacher/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  confirm(arg0: string, arg1: boolean, arg2: { this: any; }, arg3: () => void) {
    throw new Error("Method not implemented.");
  }

  constructor(private teacherService:TeacherService) { }
  ConfirmDialog(title, body, successMessage, errorMessage, id?) {
    alertify
      .confirm(
        title,
        body,

        () => {
          if (title == 'deleteTeacher') {
            this.teacherService.deleteTeacher(id);
          }
          this.successMessage(successMessage);
        },
        () => {
          this.errorMessage(errorMessage);
        }
      )
      .autoCancel(5);
      }
  successMessage(message) {
    alertify.success(message);
  }
  errorMessage(message) {
    alertify.error(message);
  }
}
