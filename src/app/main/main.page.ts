import {Component, OnInit} from '@angular/core';
import {User} from './interfaces/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  user: User = {id:1,username: 'd',password: 'd', email: 's'};
  constructor() {

    console.log(this.user);
  }
  ngOnInit() {
  }

}
