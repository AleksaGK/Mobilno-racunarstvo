import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {

  movies = [];
  constructor(private route: ActivatedRoute, private service: MainService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.service.getMoviesByGenre(paramMap.get('Name').toLowerCase()).subscribe(
        (res) => {
          this.movies = res;
        }, 
        (error) => { console.log(error); });
    });
  }

}
