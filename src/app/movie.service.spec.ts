import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { IMovie, IMovieSearch } from './movie.model';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    movieService = TestBed.get(MovieService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should return a list of movies when searchMovies is called', () => {
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

    movieService.searchMovies('avengers').subscribe((data) => {
      expect(data).toEqual(movies);
    });

    const req = httpTestingController.expectOne('https://www.omdbapi.com/?apikey=b48eb6eb&page=1&s=avengers');

    expect(req.request.method).toEqual('GET');

    req.flush(movies);

    httpTestingController.verify();
  });

  it('should return details of a single movie when getMovie is called', () => {
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

    movieService.getMovie('tt4154756').subscribe((data) => {
      expect(data).toEqual(movie);
    });

    const req = httpTestingController.expectOne('https://www.omdbapi.com/?apikey=b48eb6eb&plot=full&i=tt4154756');

    expect(req.request.method).toEqual('GET');

    req.flush(movie);

    httpTestingController.verify();
  });
});
