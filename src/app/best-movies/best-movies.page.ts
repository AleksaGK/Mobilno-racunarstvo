import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-best-movies',
  templateUrl: './best-movies.page.html',
  styleUrls: ['./best-movies.page.scss'],
})
export class BestMoviesPage implements OnInit {

  movies: Movie[] = [
    {
      MovieId: 1,
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      ReleaseDate: new Date("2011-5-6"),
      ImdbId: "tt1201607",
      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
      MovieId: 2,
      Title: "Harry Potter and the Sorcerer's Stone",
      ReleaseDate: new Date("2001-5-6"),
      ImdbId: "tt0241527",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    }
  ];

  constructor() {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
  }




  // ionViewWillEnter() {
  //   console.log("ionViewWillEnter")
  // }
  // ionViewDidEnter() {
  //   console.log("ionViewDidEnter")
  // }
  // ionViewWillLeave() {
  //   console.log("ionViewWillLeave")
  // }
  // ionViewDidLeave() {
  //   console.log("ionViewDidLeave")
  // }
  // ngOnDestroy() {
  //   console.log("ngOnDestroy")
  // }

}
