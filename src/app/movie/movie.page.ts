import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit, OnDestroy {

  constructor() {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter")
  }
  ionViewDidEnter() {
    console.log("ionViewDidEnter")
  }
  ionViewWillLeave() {
    console.log("ionViewWillLeave")
  }
  ionViewDidLeave() {
    console.log("ionViewDidLeave")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

}
