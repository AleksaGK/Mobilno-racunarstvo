import { Component, OnInit } from '@angular/core';
import {AuthService} from '../autf/service/auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  logged: boolean;
  constructor(public authService: AuthService, private alertController: AlertController) { }


  ngOnInit() {
  }
  ionViewWillEnter(){

    console.log('cao');
    this.logged = this.authService.isLoggedIn;
  }


  onAlert() {

    this.alertController.create({
      cssClass: 'alertHeader',
      header: 'Log out',
      message: 'Are you sure you want to log out ?',
      buttons:[
        {
          text: 'Yes',
          handler:()=>{
            console.log('Yes');
            this.authService.isLoggedIn=false;
            this.logged= false;
          }
        },
        {
          text: 'No',
          role: 'Cancel',
          handler:()=>{
            console.log('No');
          }
        }
      ]
    }).then((alert)=>{
      alert.present();
    });
  }
}
