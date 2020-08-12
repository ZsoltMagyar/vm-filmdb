import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { Credit } from '../models/credit.model';
import { Result } from '../models/result.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) { }

  getLatestMovies(page = 1): Observable<Result<Movie>> {
    return this.http.get<Result<Movie>>(`${environment.baseUrl}discover/movie?api_key=${environment.api_key}&page=${page}&sort_by=release_date.desc&vote_count.gte=1`);
  }

  searchMovie(query: string, page = 1): Observable<Result<Movie>> {
    return this.http.get<Result<Movie>>(`${environment.baseUrl}search/movie?api_key=${environment.api_key}&query=${query}&page=${page}`);
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseUrl}movie/${movieId}?api_key=${environment.api_key}`);
  }

  getMovieCredits(movieId: number): Observable<Credit> {
    return this.http.get<Credit>(`${environment.baseUrl}movie/${movieId}/credits?api_key=${environment.api_key}`);
  }

  getMovieReviews(movieId: number, page = 1): Observable<Result<Review>> {
    return this.http.get<Result<Review>>(`${environment.baseUrl}movie/${movieId}/reviews?api_key=${environment.api_key}&page=${page}`)
  }
}
