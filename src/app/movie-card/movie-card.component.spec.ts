import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MovieCardComponent } from './movie-card.component';
import { FavoritesService } from '../favorites/favorites.service';
import { RouterLinkDirectiveStub } from '../test/router-link-directive-stub.directive';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const mockFavoritesService = jasmine.createSpyObj(['addToFavorites', 'removeFromFavorites', 'isFavorite']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [
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
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;

    component.movie = {
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

    component.star = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the movie to favorites if the hollow star icon is clicked', () => {
    mockFavoritesService.isFavorite.and.returnValue(false);
    fixture.detectChanges();

    const starDe = fixture.debugElement.query(By.css('.star-icon'));
    starDe.triggerEventHandler('click', null);

    expect(mockFavoritesService.addToFavorites).toHaveBeenCalled();
  });

  it('should remove the movie from favorites if the solid star icon is clicked', () => {
    mockFavoritesService.isFavorite.and.returnValue(true);
    fixture.detectChanges();

    const starDe = fixture.debugElement.query(By.css('.star-icon'));
    starDe.triggerEventHandler('click', null);

    expect(mockFavoritesService.removeFromFavorites).toHaveBeenCalled();
  });
});
