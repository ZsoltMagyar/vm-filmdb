import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { reducer } from './store/vm-filmdb.reducer';
import { FilmDBEffects } from './store/vm-filmdb.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    MovieListItemComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ home: reducer}),
    EffectsModule.forRoot([FilmDBEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
