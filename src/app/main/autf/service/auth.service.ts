import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../interfaces/user.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:16615/api/user';
  public user: User;

  constructor(private http: HttpClient) {

  }

  registerUser(value: any) {

    const data = { username: value.username, password: value.password, email: value.email };

    //
    // const user: User = new User();
    // user.password= value.password;
    // user.username= value.username;
    // user.email= value.email;


    // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(this.url, data);
  }

  login(value: any) {


    const params = new HttpParams().set('email', value.email).set('password', value.password); //Create new HttpParams

    return this.http.get<any>(this.url, { params ,observe:'response'}).pipe(map(response=>{
      if(response){
        console.log(response);

      }
    }));
  }
}
