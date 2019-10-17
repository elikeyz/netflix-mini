import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMovieSearch } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string, nextPage: number = 1): Observable<IMovieSearch> {
    return this.http.get<IMovieSearch>(`https://www.omdbapi.com/?apikey=b48eb6eb&page=${nextPage}&s=${searchTerm}`)
      .pipe(catchError(this.handleError<IMovieSearch>('searchMovies')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
