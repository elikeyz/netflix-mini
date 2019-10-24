import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { appRoutes } from './routes';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { Error404Component } from './error404/error404.component';
import { SESSION_STORAGE_TOKEN, SessionStorage } from './session-storage.service';

const sessionStorage: SessionStorage = window['sessionStorage'];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    { provide: SESSION_STORAGE_TOKEN, useValue: sessionStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
