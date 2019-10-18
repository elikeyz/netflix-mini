import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IMovie } from './movie.model';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<IMovie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieService.getMovie(route.params.id);
  }
}
