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

  // toggleFunc(){
  //   console.log(this.resultsAvailable)
  //   this.resultsAvailable = !this.resultsAvailable;
  //   console.log(this.resultsAvailable)
  // }

  onSearchChange(event: any) {
    const substring: string = event.target.value;
    let all = this.mainService.getMovies();
    this.searchedMovies = [];
    if (substring == "") {
      return;
    }
    let i = 0;
    for (let index = 0; index < all.length; index++) {
      if (all[index].Title.toLowerCase().includes(substring.toLowerCase())) {
        this.searchedMovies[i++] = { title: all[index].Title, img: all[index].Poster };
        this.resultsAvailable = true;
      }
    }

  }
}
