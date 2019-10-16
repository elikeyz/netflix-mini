import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';

export const appRoutes = [
  { path: '', component: LandingComponent },
  { path: 'movies', component: MoviesComponent }
];
