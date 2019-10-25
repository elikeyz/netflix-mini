import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { Error404Component } from './error404/error404.component';
import { MovieResolverService } from './movie-resolver.service';
import { FavoritesComponent } from './favorites/favorites.component';

export const appRoutes = [
  { path: '', component: LandingComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/favorites', component: FavoritesComponent },
  { path: 'movies/:id', component: MovieComponent, resolve: { movie: MovieResolverService } },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
