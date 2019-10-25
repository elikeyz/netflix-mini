import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { IMovie } from '../movie.model';

@Component({
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  movies: IMovie[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.movies = this.favoritesService.getFavorites();
  }

}
