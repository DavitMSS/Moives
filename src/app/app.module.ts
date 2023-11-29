import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './modules/shall/header/header.component';

import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { ShallModule } from './modules/shall/shall.module';
import { RandomMovieGeneratorComponent } from './components/random-movie-generator/random-movie-generator.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';

import { SkeletonModule } from 'primeng/skeleton';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RandomMovieGeneratorComponent,
    MoviesListComponent,
    TrailerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    ButtonModule,
    ProgressSpinnerModule,
    SkeletonModule,
    CardModule,
    ShallModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }