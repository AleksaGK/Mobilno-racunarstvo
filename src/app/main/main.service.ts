import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './interfaces/movie.model';
import { Vote } from './interfaces/vote.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url = 'http://localhost:16615/api/movies';
  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<any>(this.url);
  }

  public getMoviesByTitle(title: string): Observable<Movie[]> {
    const params = new HttpParams().set('title', title);
    return this.http.get<any>(this.url + '/title', { params });
  }

  getMovie(id: string, userId: number) {
    const movieId = id;
    return this.http.get<any>(this.url + '/' + movieId + '/' + userId).pipe(
      map((m: Movie) => {
        let rejoin = m.overview;
        while (rejoin.length > 280) {
          let newTitle = rejoin.split(" ");
          newTitle.pop();
          rejoin = newTitle.join(' ');
          rejoin += '...';
        }
        if (rejoin.includes('...'))
          m.overview = rejoin;
        return m;
      })
    );
  }

  getUpcomingMovies() {
    return this.http.get<any>(this.url + '/upcoming').pipe(
      map((m: Movie[]) => {
        for (let index = 0; index < m.length; index++) {
          let rejoin = m[index].title;
          while (rejoin.length > 36) {
            let newTitle = rejoin.split(" ");
            newTitle.pop();
            rejoin = newTitle.join(' ');
            rejoin += '...';
          }
          if (rejoin.includes('...'))
            m[index].title = rejoin;
        }
        return m;
      })
    );
  }

  getTop10Movies() {
    return this.http.get<any>(this.url + '/top').pipe(
      map((m: Movie[]) => {
        for (let index = 0; index < m.length; index++) {
          let rejoin = m[index].title;
          while (rejoin.length > 36) {
            let newTitle = rejoin.split(" ");
            newTitle.pop();
            rejoin = newTitle.join(' ');
            rejoin += '...';
          }
          if (rejoin.includes('...'))
            m[index].title = rejoin;
        }
        return m;
      })
    );
  }

  getGenres() {
    return this.http.get<any>(this.url + '/genres');
  }

  voteMovie(vote: Vote) {
    // const data = {userId: vote.userId, movieId: vote.movieId,numberOfStars:vote.numberOfStars};
    return this.http.post<any>(this.url + '/vote', vote);
  }

  getMoviesByGenre(genreName: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '/genres/' + genreName);
  }

  getVotedMovies(userId: number): Observable<Movie[]> {
    const params = new HttpParams().set('id', userId.toString());
    return this.http.get<Movie[]>(this.url + '/voted', { params });
  }

  deleteVote(vote: Vote): Observable<number> {
    console.log(vote.movieId)
    let httpParams = new HttpParams().set('userId', vote.userId.toString()).set('movieId', vote.movieId.toString());
    let options = { params: httpParams };

    return this.http.delete<number>(this.url, options);
  }
}
