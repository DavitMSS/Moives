import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

import { SafePipe } from 'src/app/pipes/safe.pipe';


import { RandomMoiveBtnComponent } from './random-moive-btn/random-moive-btn.component';
import { RandomMovieGeneratorComponent } from './random-movie-generator/random-movie-generator.component';
import { TrailerComponent } from './trailer/trailer.component';
import { CardComponent } from './card/card.component';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
    declarations: [
      RandomMovieGeneratorComponent,
      RandomMoiveBtnComponent,
      TrailerComponent,
      CardComponent,
      SafePipe,
    ],

  imports: [
    CommonModule,
    SkeletonModule,
  ],
  exports: [
    RandomMovieGeneratorComponent,
    RandomMoiveBtnComponent,
    TrailerComponent,
    CardComponent,

    SafePipe
  ]
})
export class SharedModule { }
