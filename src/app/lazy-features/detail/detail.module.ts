import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MovieService } from '../moives/movies.service';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  providers : [MovieService]
})
export class DetailModule { }
