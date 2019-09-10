import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ilogin} from '../model/userlogin';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class UserRegisterServices {
    private loginEndPoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header: HttpHeaders;
    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'Content-Type':'application/json'})
    }
  userLogin(item:Ilogin):Observable<Ilogin> {
      return this.http.post<Ilogin>(this.loginEndPoint, JSON.stringify(item), {headers: this.header})
      .pipe(map(item => {
          if(item && item.UserIdentity){
              localStorage.setItem('currentUser', JSON.stringify(item))
              return item;
          }
          return item;
      }))
  };
  userLogout() {
      localStorage.removeItem('currentUser');
      location.reload();
  }

}