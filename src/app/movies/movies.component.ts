import { Component, OnInit, Inject } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites/favorites.service';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchTerm: string;
  nextPage = 1;
  movies: IMovie[];
  isLoadingMovies = false;
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  constructor(private movieService: MovieService, private favoritesService: FavoritesService) { }

  ngOnInit() {

  }

  search(): void {
    this.movies = [];
    this.nextPage = 1;
    this.isLoadingMovies = true;
    this.movieService.searchMovies(this.searchTerm, this.nextPage)
      .subscribe((response) => {
        this.movies = [...this.movies, ...response.Search];
        this.nextPage = this.nextPage + 1;
        this.isLoadingMovies = false;
      });
  }

  addToFavorites(movie: IMovie): void {
    this.favoritesService.addToFavorites(movie);
  }

  removeFromFavorites(movie: IMovie): void {
    this.favoritesService.removeFromFavorites(movie);
  }

  isFavorite(movie: IMovie): boolean {
    return this.favoritesService.isFavorite(movie);
  }

}
