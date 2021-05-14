import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../interfaces/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  private _isLoggedIn = true;
   private url = 'http://localhost:16615/api/user';

  constructor( private http: HttpClient) {


    // this.user.username = 'dasdas';
    // this.user.email = 'dasdas';
    // this.user.password = 'dasdas';
    // this.user.userid = 1;
    // this.user.movies = [];
    // this.user.votes = [];
  }






  registerUser(value: any) {

    // const headers: HttpHeaders = new  HttpHeaders();
    // headers.set('Content-Type', 'application/json');

    const  data = {username: value.username, password: value.password,email: value.email};

    // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.url,data);
  }
}
