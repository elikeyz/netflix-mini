import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie, IMovieSearch } from '../movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchTerm: string;
  pageCount: number;
  nextPage = 1;
  movies: IMovie[];
  isLoadingMovies = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  search(): void {
    this.movies = [];
    this.nextPage = 1;
    this.isLoadingMovies = true;
    this.movieService.searchMovies(this.searchTerm, this.nextPage)
      .subscribe((response: IMovieSearch): void => {
        this.pageCount = Math.floor(Number(response.totalResults) / response.Search.length) + 1;
        this.movies = [...this.movies, ...response.Search];
        this.nextPage = this.nextPage + 1;
        this.isLoadingMovies = false;

        // Implement infinite scroll
        window.onscroll = () => {
          if (response.Response !== 'True' || this.isLoadingMovies || this.nextPage > this.pageCount) {
            return;
          }

          if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            this.isLoadingMovies = true;
            this.movieService.searchMovies(this.searchTerm, this.nextPage)
              .subscribe((newResponse: IMovieSearch): void => {
                this.movies = [...this.movies, ...newResponse.Search];
                this.nextPage = this.nextPage + 1;
                this.isLoadingMovies = false;
              });
          }
        };
      });
  }

}
