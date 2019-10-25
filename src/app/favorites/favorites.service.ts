import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE_TOKEN, SessionStorage } from '../session-storage.service';
import { IMovie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(@Inject(SESSION_STORAGE_TOKEN) private sessionStorage: SessionStorage) { }

  addToFavorites(movie: IMovie): void {
    if (this.sessionStorage.getItem('favoriteMovies') === null) {
      this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites: [] }));
    }

    const favorites = [...JSON.parse(this.sessionStorage.getItem('favoriteMovies')).favorites];

    if (!favorites.find(movieMatch => movieMatch.imdbID === movie.imdbID)) {
      favorites.push(movie);

      this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites }));
    }
  }

  removeFromFavorites(movie: IMovie): void {
    if (this.sessionStorage.getItem('favoriteMovies') === null) {
      this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites: [] }));
    } else {
      const favorites = [...JSON.parse(this.sessionStorage.getItem('favoriteMovies')).favorites];

      if (favorites.find(movieMatch => movieMatch.imdbID === movie.imdbID)) {
        favorites.splice(favorites.findIndex(movieMatch => movieMatch.imdbID === movie.imdbID), 1);

        this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites }));
      }
    }
  }

  getFavorites(): IMovie[] {
    if (this.sessionStorage.getItem('favoriteMovies') === null) {
      this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites: [] }));
    }

    return JSON.parse(this.sessionStorage.getItem('favoriteMovies')).favorites;
  }

  isFavorite(movie: IMovie): boolean {
    if (this.sessionStorage.getItem('favoriteMovies') === null) {
      this.sessionStorage.setItem('favoriteMovies', JSON.stringify({ favorites: [] }));
      return false;
    }

    return !!JSON.parse(this.sessionStorage.getItem('favoriteMovies')).favorites.find(movieMatch => movieMatch.imdbID === movie.imdbID);
  }
}
