import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoivesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PaginatorModule } from 'primeng/paginator';
import { MovieService } from './movies.service';


@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    MoivesRoutingModule,
    SharedModule,
    PaginatorModule

  ],
  exports:[MoviesPageComponent],
  // providers: [MovieService]
})
export class MoivesModule { }
