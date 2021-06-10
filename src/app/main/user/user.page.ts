import { Component, OnInit } from '@angular/core';
import { AuthService } from '../autf/service/auth.service';
import { AlertController } from '@ionic/angular';
import { MainService } from '../main.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  votedMovies = [];
  userId = (this.authService.user != undefined) ? this.authService.user.userId : null;

  constructor(public authService: AuthService, private alertController: AlertController, private mainService: MainService,
              private router: Router) { }


  ngOnInit() {

  }


  ionViewWillEnter() {
    if(this.authService.user!=null)
    {console.log(this.authService.user.userId);}

    if (this.authService.user != undefined)
      this.mainService.getVotedMovies(this.authService.user.userId).subscribe(
        (result) => {
          this.votedMovies=[];
          for (let index = 0; index < result.length; index++)
            if (index < 3)
              this.votedMovies[index] = result[index];
        },
        (error) => { console.log(error) }
      );
  }


  onAlert() {

    this.alertController.create({
      cssClass: 'alertHeader',
      header: 'Log out',
      message: 'Are you sure you want to log out ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes');
            this.authService.logout().subscribe((res)=>{
            this.authService.user = null;
              console.log(res);

            },error => {console.log(error);});
          }
        },
        {
          text: 'No',
          role: 'Cancel',
          handler: () => {
            console.log('No');
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  showMovieList() {
    this.router.navigate(['tabs/user/'+this.authService.user.userId]);
  }
}
