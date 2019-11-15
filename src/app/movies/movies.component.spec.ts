import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';

import { MoviesComponent } from './movies.component';
import { MovieService } from '../movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { RouterLinkDirectiveStub } from '../test/router-link-directive-stub.directive';
import { IMovieSearch } from '../movie.model';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  const mockMovieService = jasmine.createSpyObj(['searchMovies']);
  const movies: IMovieSearch = {
    Search: [
      {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        // tslint:disable-next-line: max-line-length
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
          Title: 'Avengers: Infinity War',
          Year: '2018',
          imdbID: 'tt4154756',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
      },
      {
          Title: 'Avengers: Age of Ultron',
          Year: '2015',
          imdbID: 'tt2395427',
          Type: 'movie',
          // tslint:disable-next-line: max-line-length
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
      }
    ],
    totalResults: '3',
    Response: 'True'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        MoviesComponent,
        MovieCardComponent,
        RouterLinkDirectiveStub
      ],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toContain('Search Movies and Series');
  });

  it('should call movieService.searchMovies when search is called', () => {
    component.searchTerm = 'avengers';
    mockMovieService.searchMovies.and.returnValue(of(movies));
    fixture.detectChanges();

    component.search();

    expect(mockMovieService.searchMovies).toHaveBeenCalledWith('avengers', 1);
  });
});
