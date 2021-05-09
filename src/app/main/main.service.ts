import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private date = [
    {
      MovieId: 1,
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      ImdbId: "tt1201607",
      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
      MovieId: 2,
      Title: "Harry Potter and the Sorcerer's Stone",
      ImdbId: "tt0241527",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      MovieId: 3,
      Title: "Harry Potter and the Chamber of Secrets",
      ImdbId: "tt0295297",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
    },
    {
      MovieId: 4,
      Title: "Harry Potter and the Prisoner of Azkaban",
      ImdbId: "tt0304141",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
    },
    {
      MovieId: 5,
      Title: "Harry Potter and the Goblet of Fire",
      ImdbId: "tt0330373",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
    },
    {
      MovieId: 6,
      Title: "Harry Potter and the Order of the Phoenix",
      ImdbId: "tt0373889",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
    },
    {
      MovieId: 7,
      Title: "Harry Potter and the Deathly Hallows: Part 1",
      ImdbId: "tt0926084",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
    },
    {
      MovieId: 8,
      Title: "Harry Potter and the Half-Blood Prince",
      ImdbId: "tt0417741",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
    },
    {
      MovieId: 9,
      Title: "Harry Potter and the Forbidden Journey",
      ImdbId: "tt1756545",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
    },
    {
      MovieId: 10,
      Title: "Harry Potter and the Chamber of Secrets",
      ImdbId: "tt0304140",
      Poster: "https://m.media-amazon.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg"
    }
  ]

  constructor() { }

  getMovies() {
    return this.date;
  }

  getMovie(id: string) {
    return this.date.find(m => m.MovieId == parseInt(id, 10));
  }




}
