import { Injectable } from '@angular/core';
//import {AngularFireAuth} from '@angular/fire/auth';
//import firebase from 'firebase/app';

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

  private _isLoggedIn: boolean = true;
  //constructor(public auth: AngularFireAuth) { }
  constructor() { }


  // loginFireauth(value){
  //   return new Promise<any> ((resolve,reject)=>{

  //     firebase.auth().signInWithEmailAndPassword(value.email,value.password).then(
  //       res=> resolve(res),
  //       error=>reject(error)
  //     );
  //   });
  // }
}
