import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  fullName: string;
  lastName: string;
  numberOfCourses: number;
  courses: string;
}
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  students: Array<any>  = [
    {
      fullName: 'Abraham Lincoln',
      numberOfCourses: '5',
      courses: 'Applied Data Science, Python 3 Programming, Introduction to C#, Business Analytics, Management'
    }, {
      fullName: 'George Washington',
      numberOfCourses: '4',
      courses: 'Python 3 Programming, Introduction to C#, Business Analytics, Information Technology'
    }, {
      fullName: 'John Adams',
      numberOfCourses: '0',
      courses: 'None'

    }, {
      fullName: 'Thomas Jefferson',
      numberOfCourses: '0',
      courses: 'None'
    }, {
      fullName: 'James Madison',
      numberOfCourses: '1',
      courses: 'Applied Data Science'
    }, {
      fullName: 'James Monroe',
      numberOfCourses: '3',
      courses: 'Python 3 Programming, Introduction to C#, Business Analytics'
    }
  ];

  constructor(private http: HttpClient) {}

  getStudentInf(): Observable<any[]> {
    return of(this.students);
  }

}
