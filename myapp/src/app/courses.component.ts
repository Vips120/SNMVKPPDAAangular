import {Component} from '@angular/core';
import {Courses} from './courses';
@Component({
    selector:'app-course',
    template:`
    <h1>{{userName}}</h1>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `,
    styles:[``]
})

export class CourseComponent {
    public userName:string = 'Vipul Singh';
    public courses:Array<string>;
    // public courses:Array<string> = ['Angular','Typescript', 'Javascript', 'Reactjs'];
  constructor(private course: Courses){
      //never ever ever ever nd ever ever use tight coupling ok...........
    //   let courses = new Courses();
    //   this.courses = courses.getCourse();
    this.courses = course.getCourse();
  }
}
