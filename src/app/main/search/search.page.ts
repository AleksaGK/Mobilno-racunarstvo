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

    this.mainService.getMoviesByTitle(substring).subscribe(res => { this.searchedMovies =res ; this.resultsAvailable = true},error => { console.log(error); });


  }
}
