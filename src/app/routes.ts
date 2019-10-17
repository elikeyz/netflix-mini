import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { Error404Component } from './error404/error404.component';

export const appRoutes = [
  { path: '', component: LandingComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: '404', component: Error404Component }
];
