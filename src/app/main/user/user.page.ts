import { Component, OnInit } from '@angular/core';
import {AuthService} from '../autf/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  logged: boolean;
  constructor(public authService: AuthService) { }


  ngOnInit() {
    this.logged = this.authService.isLoggedIn;
  }


}
