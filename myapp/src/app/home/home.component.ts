import { Component, OnInit,ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import {map,filter,debounceTime} from 'rxjs/operators';
import { UserServices } from '../shared/services/user.services';
import {IuserData} from '../shared/model/userData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public userData:IuserData[];
  constructor(private el:ElementRef, private userServices: UserServices) { }

  ngOnInit() {
  this.userServices.User()
  .subscribe(data => {
    this.userData = data;
    console.log(data);
  });


  let search = this.el.nativeElement.querySelector('#search');
  let observe = fromEvent(search,'keyup')
                         .pipe(map((e:any) => e.target.value),
                                   filter(data => data.length >=5),
                                   debounceTime(2000)
                         );

  observe.subscribe(data => {
    console.log(data);
  })
  }

}
