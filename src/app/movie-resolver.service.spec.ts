import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { MovieResolverService } from './movie-resolver.service';
import { MovieService } from './movie.service';
import { IMovie } from './movie.model';

describe('MovieResolverService', () => {
  const mockMovieService = jasmine.createSpyObj(['getMovie']);
  let mockRoute: ActivatedRouteSnapshot;
  let service: MovieResolverService;
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

  beforeEach(() => {
  mockRoute = new ActivatedRouteSnapshot();

  TestBed.configureTestingModule({
    providers: [
      { provide: MovieService, useValue: mockMovieService }
    ]
  });

  service = TestBed.get(MovieResolverService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call movieService.getMovie with the movie ID passed in the URL params', () => {
    mockRoute.params = { id: 'tt0848228' };

    service.resolve(mockRoute);

    expect(mockMovieService.getMovie).toHaveBeenCalledWith('tt0848228');
  });

  it('should return the corresponding movie object when resolve is called', () => {
    mockMovieService.getMovie.and.returnValue(of(movie));
    mockRoute.params = { id: 'tt0848228' };

    service.resolve(mockRoute).subscribe((response) => {
      expect(response).toEqual(movie);
    });
  });
});
