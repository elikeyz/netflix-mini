import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from './favorites.service';
import { IMovie } from '../movie.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { RouterLinkDirectiveStub } from '../test/router-link-directive-stub.directive';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  const mockFavoritesService = jasmine.createSpyObj(['getFavorites']);
  const movie: IMovie = {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    Rated: 'PG-13',
    Released: '27 Apr 2018',
    Runtime: '149 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Anthony Russo, Joe Russo',
    // tslint:disable-next-line: max-line-length
    Writer: 'Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)',
    Actors: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
    // tslint:disable-next-line: max-line-length
    Plot: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    Language: 'English',
    Country: 'USA',
    Awards: 'N/A',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    Ratings: [
        {
            Source: 'Internet Movie Database',
            Value: '8.5/10'
        },
        {
            Source: 'Rotten Tomatoes',
            Value: '85%'
        },
        {
            Source: 'Metacritic',
            Value: '68/100'
        }
    ],
    Metascore: '68',
    imdbRating: '8.5',
    imdbVotes: '717,106',
    imdbID: 'tt4154756',
    Type: 'movie',
    DVD: '14 Aug 2018',
    BoxOffice: '$664,987,816',
    Production: 'Walt Disney Pictures',
    Website: 'N/A',
    Response: 'True'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [
        FavoritesComponent,
        MovieCardComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: FavoritesService, useValue: mockFavoritesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the list of movies from favorites service', () => {
    mockFavoritesService.getFavorites.and.returnValue([movie]);

    component.ngOnInit();

    expect(component.movies[0]).toEqual(movie);
  });
});
