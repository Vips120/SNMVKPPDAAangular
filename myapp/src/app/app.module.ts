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
import { Imgpipe } from './img.pipes';
import { TemplateFormComponent } from './template-form/template-form.component';
import { XyzPipe } from './xyz.pipe';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
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
    CustomDirective,
    Imgpipe,
    TemplateFormComponent,
    XyzPipe,
    ReactiveformComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
