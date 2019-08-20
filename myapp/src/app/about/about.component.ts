import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public products = [{
  id:'homexsdfsf',
  name:'john'
},
 {
   id:2,
   name:'kim'
 },
 {
   id:3,
   name:'emma'
 }
 
];
  constructor() { }

  ngOnInit() {
  }

}
