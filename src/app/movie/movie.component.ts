import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites/favorites.service';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: IMovie;
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  constructor(private route: ActivatedRoute, private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.movie = data.movie;
    });
  }

  addToFavorites(): void {
    this.favoritesService.addToFavorites(this.movie);
  }

  removeFromFavorites(): void {
    this.favoritesService.removeFromFavorites(this.movie);
  }

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.movie);
  }

}
