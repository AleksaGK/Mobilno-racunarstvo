import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(private http: HttpClient) { }

  public getMovies2(): Observable<Movie[]> {
    return this.http.get<any>("http://localhost:16615/api/movies");
  }

  // getMovies() {
  //   return this.date;
  // }

  getMovie(id: string) {
    return this.http.get<any>("http://localhost:16615/api/movies/" + id);
  }


  // private date = [
  //   {
  //     movieId: 1,
  //     title: "Harry Potter and the Deathly Hallows: Part 2",
  //     imdbId: "tt1201607",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 2,
  //     title: "Harry Potter and the Sorcerer's Stone",
  //     imdbId: "tt0241527",
  //     poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 3,
  //     title: "Harry Potter and the Chamber of Secrets",
  //     imdbId: "tt0295297",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 4,
  //     title: "Harry Potter and the Prisoner of Azkaban",
  //     imdbId: "tt0304141",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 5,
  //     title: "Harry Potter and the Goblet of Fire",
  //     imdbId: "tt0330373",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 6,
  //     title: "Harry Potter and the Order of the Phoenix",
  //     imdbId: "tt0373889",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 7,
  //     title: "Harry Potter and the Deathly Hallows: Part 1",
  //     imdbId: "tt0926084",
  //     poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 8,
  //     title: "Harry Potter and the Half-Blood Prince",
  //     imdbId: "tt0417741",
  //     poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 9,
  //     title: "Harry Potter and the Forbidden Journey",
  //     imdbId: "tt1756545",
  //     poster: "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   },
  //   {
  //     movieId: 10,
  //     title: "Harry Potter and the Chamber of Secrets",
  //     imdbId: "tt0304140",
  //     poster: "https://m.media-amazon.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg",
  //     budget: 12,
  //     genres: [{genreId:1, name: 'action'}],
  //     homepage: 'http://nesto',
  //     language: 'srb',
  //     overview: 'opis',
  //     popularity: 10000,
  //     releaseDate: new Date(),
  //     revenue: 52,
  //     runtime: 36,
  //     tagline: 'tagline',
  //     imdbRating: 2,
  //     voteCount: 65,
  //     actors: 'actors',
  //     awards: 'awards',
  //     director: 'director'
  //   }
  // ]

}
