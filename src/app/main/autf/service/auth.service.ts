import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;
  private url = 'http://localhost:16615/api/user';

  constructor(private http: HttpClient) {

  }

  registerUser(value: any) {

    const data = { username: value.username, password: value.password, email: value.email };

    return this.http.post(this.url, data);
  }

  login(value: any) {

    const params = new HttpParams().set('email', value.email).set('password', value.password); //Create new HttpParams

    return this.http.get<any>(this.url, { params });
  }

  logout() {

    const params = new HttpParams().set('nesto','nesto'); //Create new HttpParams
    return this.http.delete<any>(this.url,{params});
  }
}
