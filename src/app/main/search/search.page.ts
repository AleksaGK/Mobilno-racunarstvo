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

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const substring: string = event.target.value;
    let all =[];
    this.mainService.getMoviesByTitle(substring).subscribe((result) => { all=result; console.log(result);},(error) => { console.log(error); });
    this.searchedMovies = [];

    console.log(all);

    return;

    // let i = 0;
    // for (let index = 0; index < all.length; index++) {
    //   if (all[index].title.toLowerCase().includes(substring.toLowerCase())) {
    //     this.searchedMovies[i++] = { MovieId: all[index].movieId, title: all[index].title, img: all[index].poster };
    //     this.resultsAvailable = true;
    //   }
    // }

  }
}
