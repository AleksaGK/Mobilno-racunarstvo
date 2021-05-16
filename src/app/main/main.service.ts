import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './interfaces/movie.model';
import {Vote} from './interfaces/vote.model';

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
    const params = new HttpParams().set('title',title);
    return this.http.get<any>(this.url+'/title',{params});
  }

  // getMovie(id: string, userId: number) {
  //   return this.http.get<any>(this.url + '/'+id);
  // }
  getMovie(id: string, userId: number) {
    console.log(userId);
    const movieId = id;
       return this.http.get<any>(this.url + '/'+movieId+'/'+userId);
  }


  getUpcomingMovies() {
    return this.http.get<any>(this.url+'/upcoming');
  }
  getTop10Movies() {
    return this.http.get<any>(this.url+'/top');
  }

  getGenres() {
    return this.http.get<any>(this.url + '/genres');
  }
  voteMovie(vote: Vote) {

    // const data = {userId: vote.userId, movieId: vote.movieId,numberOfStars:vote.numberOfStars};
    return this.http.post<any>(this.url+'/vote',vote);
  }
  getMoviesByGenre(genreName: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '/genres/' + genreName);
  }
}
