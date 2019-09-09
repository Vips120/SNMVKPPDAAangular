import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Ilogin} from '../../shared/model/userlogin';
import { UserRegisterServices } from 'src/app/shared/services/user.register.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public Login: FormGroup;
public submitted:boolean = false;
  constructor(private fb:FormBuilder, private userServices: UserRegisterServices, private router:Router) { }

  ngOnInit() {
    this.Login = this.fb.group({
      'UserLogin': this.fb.group({
        UserName:['', [Validators.required]],
      Password:['',[Validators.required]]
      })
    })
  };
  Save(data: Ilogin){
    this.submitted = true;
    if(!this.Login.valid){return;}
    console.log(data);
    this.userServices.userLogin(data)
    .subscribe(data => {
      alert('login Succesful');
      this.router.navigateByUrl('/home');
      console.log(data);
    })
  }
}
