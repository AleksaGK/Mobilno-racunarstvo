import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  validationFormUser: FormGroup;
  validationUserMessage = {
    email: [
      { type: 'required', message: 'Please enter your Email !' },
      { type: 'pattern', message: 'The email entered is incorrect. Try again' }
    ],
    password: [
      { type: 'required', message: 'Please enter your password !' },
      { type: 'minlength', message: 'The password must be at least 6 characters or more' }

    ]
  };
  constructor(public formBuilder: FormBuilder, public authService: AuthService, private toastController: ToastController,
    private router: Router) {
  }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
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

  loginUser(value: any) {
    this.authService.login(value).subscribe(res => {

      const token = ( <any>res).token;
      console.log(token);
      this.authService.user = res;
      console.log(this.authService.user.userId);
      this.router.navigate(['/tabs']);
    },
      err => this.presentToast(err.message));

  }


  async presentToast(message) {
    if (message.includes('401')) {
      message = 'Wrong credentials !';
    }

    const toast = await this.toastController.create({
      // message: 'Username or email are already used',
      message: message,
      duration: 2000,
      position: 'middle',
      color: 'warning'
    });
    toast.present();
  }
}
