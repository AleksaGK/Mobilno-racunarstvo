import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  validationMessages = {
    username: [{type:'required', message:'Please enter username'}],
    email: [
      {type: 'required',message:'Enter your email'},
      {type:'pattern', message:'The Email entered is incorrect. Try again.'}
    ],
    password: [
      {type: 'required', message: 'Password is required here'},
      {type:'minlength', message: 'Password must be at least 6 character'}
    ]
  };
  validationFormUser: FormGroup;
  constructor(private formBuilder: FormBuilder ) {

      }



  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      username: new FormControl('',Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  registerUser(value: any) {

  }
}
