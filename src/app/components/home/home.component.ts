import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { AppState } from 'src/app/store/vm-filmdb.reducer';
import { Store, select } from '@ngrx/store';
import { loadMoreMovies, searchMovies, searchMoreMovies, loadMovieById } from 'src/app/store/vm-filmdb.actions';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { selectMovies, selectCurrentPage } from 'src/app/store/vm-filmdb.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies$: Observable<Movie[]>;

  currentPage: number;

  searchValue: string;

  constructor(private tmdbApi: TmdbApiService, private store: Store<AppState>, private rotuer: Router) { }

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(selectMovies));
    this.store.select(selectCurrentPage).subscribe(page => this.currentPage = page);
  }

  loadMore() {
    if (!this.searchValue || this.searchValue === '') {
      this.store.dispatch(loadMoreMovies({page: this.currentPage + 1}));
    } else {
      this.store.dispatch(searchMoreMovies({query: this.searchValue, page: this.currentPage + 1}));
    }

  }

  searchMovies(e) {
    this.store.dispatch(searchMovies({query: this.searchValue}))
  }

  loadDetails(movieId) {
    this.store.dispatch(loadMovieById({movieId}));
    this.rotuer.navigateByUrl('movie/' + movieId);

  }
}
