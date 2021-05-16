import { Component, OnInit } from '@angular/core';
import {AuthService} from '../autf/service/auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  constructor(public authService: AuthService, private alertController: AlertController) { }


  ngOnInit() {
  }
  ionViewWillEnter(){

    console.log('cao');

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
            this.authService.user = null;

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
