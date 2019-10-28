import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { appRoutes } from './routes';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { Error404Component } from './error404/error404.component';
import { SESSION_STORAGE_TOKEN, SessionStorage } from './session-storage.service';
import { FavoritesService } from './favorites/favorites.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

const sessionStorage: SessionStorage = window['sessionStorage'];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    Error404Component,
    FavoritesComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    MovieService,
    FavoritesService,
    { provide: SESSION_STORAGE_TOKEN, useValue: sessionStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
