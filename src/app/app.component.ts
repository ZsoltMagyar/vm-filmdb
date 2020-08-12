import { Component, OnInit } from '@angular/core';
import { AppState } from './store/vm-filmdb.reducer';
import { Store } from '@ngrx/store';
import { loadMovies } from './store/vm-filmdb.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }
}
