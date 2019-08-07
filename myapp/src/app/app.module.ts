import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component'
import {Courses} from './courses';
import {TaskComponent} from './task.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TaskComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
