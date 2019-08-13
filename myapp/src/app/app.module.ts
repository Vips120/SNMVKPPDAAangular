import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component'
import {Courses} from './courses';
import {TaskComponent} from './task.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { PropertyComponent } from './property.component';
import { HeartComponent } from './heartlike.component';
import { CurrentUsersComponent } from './currentUser.component';
import { StoreUsersComponent } from './storeUsers.component';
import { UserComponent } from './user.component';
import { ContentPipe } from './content.pipes';
import { CustomDirective } from './custom.directives';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TaskComponent,
    ParentComponent,
    ChildComponent,
    PropertyComponent,
    HeartComponent,
    CurrentUsersComponent,
    StoreUsersComponent,
    UserComponent,
    ContentPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
