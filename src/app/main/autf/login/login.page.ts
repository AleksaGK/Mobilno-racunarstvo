import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  validationFormUser: FormGroup;
  validationUserMessage ={
    email:[
      {type:'required', message:'Please enter your Email !'},
      {type:'pattern', message:'The email entered is incorrect. Try again'}
    ],
    password:[
      {type:'required', message:'Please enter your password !'},
      {type:'minlength', message:'The password must be at least 6 characters or more'}

    ]
  };
  constructor(public formBuilder: FormBuilder) {



  }


  ngOnInit(){
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  LoginUser(value: any) {

  }
}
