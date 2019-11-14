import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FavoritesService } from './favorites.service';
import { SESSION_STORAGE_TOKEN } from '../session-storage.service';
import { IMovie } from '../movie.model';

describe('FavoritesService', () => {
  const mockSessionStorage = jasmine.createSpyObj(['setItem', 'getItem']);
  let service: FavoritesService;
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
  TestBed.configureTestingModule({
    providers: [
      { provide: SESSION_STORAGE_TOKEN, useValue: mockSessionStorage }
    ],
    schemas: [NO_ERRORS_SCHEMA]
  });

  service = TestBed.get(FavoritesService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addToFavorites', () => {
    it('should add a new movie to the favorites array', () => {
      mockSessionStorage.getItem.and.returnValue(JSON.stringify({ favorites: [] }));

      service.addToFavorites(movie);

      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('favoriteMovies', JSON.stringify({ favorites: [movie] }));
    });
  });

  describe('removeFromFavorites', () => {
    it('should create a favorites array if none exists', () => {
      mockSessionStorage.getItem.and.returnValue(null);

      service.removeFromFavorites(movie);

      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('favoriteMovies', JSON.stringify({ favorites: [] }));
    });

    it('should remove a movie already existing in favorites', () => {
      mockSessionStorage.getItem.and.returnValue(JSON.stringify({ favorites: [movie] }));

      service.removeFromFavorites(movie);

      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('favoriteMovies', JSON.stringify({ favorites: [] }));
    });
  });

  describe('getFavorites', () => {
    it('should return an array of movies from session storage', () => {
      mockSessionStorage.getItem.and.returnValue(JSON.stringify({ favorites: [movie] }));

      expect(service.getFavorites()).toEqual([movie]);
    });
  });

  describe('isFavorite', () => {
    it('should create a favorites array if none exists', () => {
      mockSessionStorage.getItem.and.returnValue(null);

      service.isFavorite(movie);

      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('favoriteMovies', JSON.stringify({ favorites: [] }));
    });

    it('should return false if no favorites array exists', () => {
      mockSessionStorage.getItem.and.returnValue(null);

      expect(service.isFavorite(movie)).toBe(false);
    });

    it('should return false if the movie does not exist in the array', () => {
      mockSessionStorage.getItem.and.returnValue(JSON.stringify({ favorites: [] }));

      expect(service.isFavorite(movie)).toBe(false);
    });

    it('should return true if the movie exists in the favorites array', () => {
      mockSessionStorage.getItem.and.returnValue(JSON.stringify({ favorites: [movie] }));

      expect(service.isFavorite(movie)).toBe(true);
    });
  });
});
