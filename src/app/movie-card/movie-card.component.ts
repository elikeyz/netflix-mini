import { Component, OnInit, Input } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FavoritesService } from '../favorites/favorites.service';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovie;
  @Input() star: boolean;
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
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
