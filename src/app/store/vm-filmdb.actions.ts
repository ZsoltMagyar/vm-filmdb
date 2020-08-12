import {createAction, props} from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { Review } from '../models/review.model';

export const loadMovies = createAction('[Home Page] Load Movies');

export const moviesLoaded = createAction('[Load Movies Effect] Movies Loaded', props<{page: number, movies: Movie[]}>());

export const loadMoreMovies = createAction('[Home Page - Load More Btn] Load More Movies', props<{page: number}>());

export const moreMoviesLoaded = createAction('[Load More Movies Effect] More Movies Loaded', props<{page: number, movies: Movie[]}>());

export const searchMovies = createAction('[Search Form] Search Movies', props<{query: string}>());

export const searchMoreMovies = createAction('[Home Page - Load More Btn] Search More Movies', props<{query: string, page: number}>())

export const loadMovieById = createAction('[Movie Card Click] Load Movie by Id', props<{movieId: number}>());

export const movieLoadedById = createAction('[Load Movie By Id Effect] Movie Loaded', props<{movie: any}>());

export const loadMoreReviews = createAction('[Load More Reviews Btn] Load More Reviews', props<{movieId: number, page: number}>());
export const moreReviewsLoaded = createAction('[Load More Reviews Effect] More Reviews Loaded', props<{page: number, reviews: Review[]}>())
