import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DetailsService, Student } from './../details.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  constructor(private detail: DetailsService) { }

  title = 'Student Course';
  showStudents = false;
  student: Student;
  studentDetails: Array<any>;
  famels;

  ngOnInit(): void {
     this.detail.getStudentInf().subscribe(res => {
       this.studentDetails = res;
     });
  }

  onlySignedUp(num) {
    console.log();
    this.detail.getStudentInf().pipe(
      map(allStudents => allStudents.find((x) => {
        return x.numberOfCourses = 0;
      }))
    );
  }

  showAll() {
    this.showStudents = true;

  }

}
