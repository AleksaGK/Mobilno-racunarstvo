import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movie: Movie;

  sliderConfiguration = {
    slidesPerView: 2.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

  constructor(private route: ActivatedRoute, private service: MainService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.movie = this.service.getMovie(paramMap.get('MovieId'));
    })
    // console.log(this.movie.MovieId)
  }

}
