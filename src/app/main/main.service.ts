import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url = 'http://localhost:16615/api/movies';
  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<any>(this.url);
  }

  getMovie(id: string) {
    return this.http.get<any>(this.url + '/' + id);
  }

  getUpcomingMovies() {
    return this.http.get<any>(this.url + '/upcoming');
  }

  getTop10Movies() {
    return this.http.get<any>(this.url + '/top');
  }

  getGenres() {
    return this.http.get<any>(this.url + '/genres');
  }

  getMoviesByGenre(genreName: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '/genres/' + genreName);
  }

}