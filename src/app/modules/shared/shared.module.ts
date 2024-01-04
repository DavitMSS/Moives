import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

import { SafePipe } from 'src/app/pipes/safe.pipe';


import { RandomMoiveBtnComponent } from './random-moive-btn/random-moive-btn.component';
import { RandomMovieGeneratorComponent } from './random-movie-generator/random-movie-generator.component';
import { TrailerComponent } from './trailer/trailer.component';
import { CardComponent } from './card/card.component';
import { MovieService } from 'src/app/lazy-features/moives/movies.service';
import { Routes, RouterModule } from '@angular/router';
import { SetBackgroundDirective } from 'src/app/directives/set-background.directive';
import { TrailerDirective } from 'src/app/directives/trailer.directive';


export const routes: Routes = [
  
  { path: 'tvshows/:id', loadChildren: () => import('../../lazy-features/detail/detail.module').then(m => m.DetailModule) },
  { path: 'movies/:id', loadChildren: () => import('../../lazy-features/detail/detail.module').then(m => m.DetailModule) },

];


@NgModule({
    declarations: [
      RandomMovieGeneratorComponent,
      RandomMoiveBtnComponent,
      TrailerComponent,
      CardComponent,
      SafePipe,
      SetBackgroundDirective,
      TrailerDirective,
    ],

  imports: [
    CommonModule,
    SkeletonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RandomMovieGeneratorComponent,
    RandomMoiveBtnComponent,
    TrailerComponent,
    CardComponent,
    SetBackgroundDirective,
    SafePipe,
    TrailerDirective
  ],
  providers: [MovieService]
})
export class SharedModule { }
