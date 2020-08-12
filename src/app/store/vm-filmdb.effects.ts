import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadMovies,
  moviesLoaded,
  loadMoreMovies,
  moreMoviesLoaded,
  searchMovies,
  searchMoreMovies,
  loadMovieById,
  movieLoadedById,
  loadMoreReviews,
  moreReviewsLoaded } from './vm-filmdb.actions';
import { TmdbApiService } from '../services/tmdb-api.service';
import {concatMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class FilmDBEffects {

  constructor(private actions$: Actions, private tmdbApi: TmdbApiService) {}

  loadMovies$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadMovies),
      concatMap(action => this.tmdbApi.getLatestMovies()),
      map(result => moviesLoaded({page: result.page, movies: result.results}))
    )
  )

  loadMoreMovies$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadMoreMovies),
      concatMap(action => this.tmdbApi.getLatestMovies(action.page)),
      map(result => moreMoviesLoaded({page: result.page, movies: result.results}))
    )
  )

  searchMovies$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchMovies),
      concatMap(action => this.tmdbApi.searchMovie(action.query)),
      map(result => moviesLoaded({page: result.page, movies: result.results}))
    )
  )

  searchMoreMovies$= createEffect(
    () => this.actions$.pipe(
      ofType(searchMoreMovies),
      concatMap(action => this.tmdbApi.searchMovie(action.query, action.page)),
      map(result => moreMoviesLoaded({page: result.page, movies: result.results}))
    )
  )

  loadMovieById$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadMovieById),
      concatMap(action => forkJoin({
        movie: this.tmdbApi.getMovieById(action.movieId),
        credit: this.tmdbApi.getMovieCredits(action.movieId),
        reviews: this.tmdbApi.getMovieReviews(action.movieId)
      })),
      map(result => movieLoadedById({movie: result}))
    )
  )

  loadMoreReviews$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadMoreReviews),
      concatMap(action => this.tmdbApi.getMovieReviews(action.movieId, action.page)),
      map(result => moreReviewsLoaded({page: result.page, reviews: result.results}))
    )
  )
}
