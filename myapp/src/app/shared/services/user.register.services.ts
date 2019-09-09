import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ilogin} from '../model/userlogin';
@Injectable({providedIn:'root'})
export class UserRegisterServices {
    private loginEndPoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header: HttpHeaders;
    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'Content-Type':'application/json'})
    }
  userLogin(item:Ilogin) {
      return this.http.post(this.loginEndPoint, JSON.stringify(item), {headers: this.header})
  }

}