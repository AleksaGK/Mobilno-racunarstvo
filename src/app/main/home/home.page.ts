import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainService } from '../main.service';
import { Movie } from '../interfaces/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  topMovies = [];
  upcomingMovies = [];

  sliderConfiguration = {
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }


  constructor(private mainService: MainService, private router: Router) {

  }

  ngOnInit() {
    this.mainService.getUpcomingMovies().subscribe(
      (result) => {
        this.upcomingMovies = result;
      },
      (error) => {
        console.log(error)
      });
    this.mainService.getTop10Movies().subscribe(
      (result) => {
        this.topMovies = result;
      },
      (error) => {
        console.log(error)
      });
  }

  ionViewDidEnter() {

    while(true){
      if (this.topMovies.length != 0 && this.upcomingMovies.length != 0) {
        // setTimeout(() => {
          let cards = document.getElementsByTagName("img");
          let heights = 0;
          let widths = 0;
          for (let index = 0; index < cards.length; index++) {
            heights += document.getElementsByTagName("img")[index].offsetHeight;
            widths += document.getElementsByTagName("img")[index].offsetWidth;
          }
          // heights /= cards.length;
          // widths /= cards.length;
          heights = 190.75;
          widths = 128;
          console.log(heights)
          console.log(widths)
          for (let index = 0; index < cards.length; index++) {
            document.getElementsByTagName("img")[index].style.height = heights + "px";
            document.getElementsByTagName("img")[index].style.width = widths + "px";
          }
        // }, 0);
        break;
      }
    }
  }
}
