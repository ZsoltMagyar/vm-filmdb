import {createReducer, on, Action} from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { moviesLoaded, moreMoviesLoaded, movieLoadedById, moreReviewsLoaded } from './vm-filmdb.actions';

export interface AppState {
  page: number;
  movies: Array<Movie>;
  selectedMovie: Movie;
}

export const initialState: AppState = {
  page: 0,
  movies: [],
  selectedMovie: null
}

export const movieReducer = createReducer(
  initialState,
  on(moviesLoaded, (state, action) => {return { page: action.page, movies: action.movies }}),
  on(moreMoviesLoaded, (state, action) => {return {page: action.page, movies: [...state.movies, ...action.movies]}}),
  on(movieLoadedById, (state, action) => {return {...state, selectedMovie: action.movie}}),
  on(moreReviewsLoaded, (state, action) => { return {...state, selectedMovie: { reviews: { page: action.page, results: action.reviews } } }})
);

export function reducer(state: AppState | undefined, action: Action) {
  return movieReducer(state, action);
}
