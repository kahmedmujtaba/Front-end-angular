import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() : Observable<any> {
    // return [
    //   {name:"Ahmed",age:"31", email:"kahmedm@gmail.com",mstatus:"married"},
    //   {name:"Mujtaba",age:"32", email:"kamujtaba@gmail.com",mstatus:"married"},
    //   {name:"Ahmed Mujtaba",age:"31", email:"kahmedmujtaba@gmail.com",mstatus:"married"},
    //   {name:"foo",age:"56", email:"foo@gmail.com",mstatus:['married','un married']},
    //   ];
    return this.http.get('http://www.mocky.io/v2/5d0cfad03500006500b89c0c');
  }
}
