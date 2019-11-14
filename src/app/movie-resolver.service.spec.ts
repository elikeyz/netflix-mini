import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MovieResolverService } from './movie-resolver.service';
import { MovieService } from './movie.service';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('MovieResolverService', () => {
  const mockMovieService = jasmine.createSpyObj(['getMovie']);
  const mockRoute = { params: { id: 'tt2395427' } };
  let service: MovieResolverService;

  beforeEach(() => {
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
});
