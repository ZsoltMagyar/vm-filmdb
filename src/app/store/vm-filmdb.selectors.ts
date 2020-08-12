import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './vm-filmdb.reducer';

export const selectAppState = createFeatureSelector<AppState>('home');

export const selectCurrentPage = createSelector(selectAppState, state => state.page);

export const selectMovies = createSelector(selectAppState, state => state.movies);

export const selectedMovie = createSelector(selectAppState, state => state.selectedMovie);
