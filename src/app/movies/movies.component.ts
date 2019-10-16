import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
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

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  search(searchTerm, nextPage) {
    this.movies = [];
    this.nextPage = 1;
    this.movieService.searchMovies(searchTerm, nextPage)
      .subscribe((response) => {
        this.movies = [...this.movies, ...response.Search];
        this.nextPage = this.nextPage + 1;
      });
  }

}
