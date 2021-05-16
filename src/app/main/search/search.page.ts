import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchedMovies = [];
  resultsAvailable = false;
  genresWithMovies = [];

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.mainService.getGenres().subscribe(
      (result) => {
        this.genresWithMovies = result;
      },
      (error) => { console.log(error) });
  }

  onSearchChange(event: any) {
    const substring: string = event.target.value;
    let all;
    this.mainService.getMovies().subscribe((result) => { all = result }, (error) => { console.log(error) });
    this.searchedMovies = [];
    if (substring == "") {
      return;
    }
    let i = 0;
    for (let index = 0; index < all.length; index++) {
      if (all[index].title.toLowerCase().includes(substring.toLowerCase())) {
        this.searchedMovies[i++] = { MovieId: all[index].movieId, title: all[index].title, img: all[index].poster };
        this.resultsAvailable = true;
      }
    }

  }
}
