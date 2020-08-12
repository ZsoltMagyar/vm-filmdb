import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/vm-filmdb.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedMovie } from 'src/app/store/vm-filmdb.selectors';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  moveiId: number;
  selectedMovie$: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.moveiId = this.route.snapshot.params['id'];
    this.selectedMovie$ = this.store.pipe(select(selectedMovie));
  }

}
