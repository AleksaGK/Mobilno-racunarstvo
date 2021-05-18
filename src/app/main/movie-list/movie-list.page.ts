import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interfaces/movie.model';
import { Vote } from '../interfaces/vote.model'
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {

  movies = [];
  includeSearch: boolean = this.url.path().includes("search");
  includeUser: boolean = this.url.path().includes("user");
  userId = 0;
  constructor(private router: Router, private route: ActivatedRoute, private service: MainService, private url: LocationStrategy) { }

  ngOnInit() {
    if (this.includeSearch) {
      this.route.paramMap.subscribe(paramMap => {
        this.service.getMoviesByGenre(paramMap.get('Name').toLowerCase()).subscribe(
          (res) => {
            this.movies = res;
          },
          (error) => { console.log(error); });
      });
    }
    else if (this.includeUser) {
      this.route.paramMap.subscribe(paramMap => {
        this.userId = parseInt(paramMap.get('userId'), 10);
        this.service.getVotedMovies(parseInt(paramMap.get('userId'), 10)).subscribe(
          (res) => {
            this.movies = res;
          },
          (error) => { console.log(error); });
      });
    }
  }

  deleteVote(event, mID) {
    //console.log(mID)
    event.stopPropagation();
    this.router.navigate(['tabs/user/' + this.userId]);
    let vote: Vote = { movieId: mID, userId: this.userId, numberOfStars: 0 }
    //console.log(vote.movieId)
    this.service.deleteVote(vote).subscribe(
      (res) => {
        this.movies = res;
      },
      (error) => { console.log(error); });

    return false;
  }

}
