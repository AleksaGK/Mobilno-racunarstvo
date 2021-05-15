import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from "../../interfaces/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private _isLoggedIn = true;
   private url = 'http://localhost:16615/api/user';

   get isLoggedIn(): boolean {
    return this._isLoggedIn;
   }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  public user : User;


  constructor( private http: HttpClient) {

  }

  registerUser(value: any) {

    // const headers: HttpHeaders = new  HttpHeaders();
    // headers.set('Content-Type', 'application/json');

    const  data = {username: value.username, password: value.password,email: value.email};

   //
   // const user: User = new User();
   // user.password= value.password;
   // user.username= value.username;
   // user.email= value.email;


    // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.url,data);
  }

  login(value: any) {


    const params = new HttpParams().set('email',value.email).set('password', value.password); //Create new HttpParams

    return this.http.get(this.url,{params:params});
  }
}
