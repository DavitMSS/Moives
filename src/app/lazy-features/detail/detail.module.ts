import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MovieService } from '../moives/movies.service';
import { TrailerComponent } from 'src/app/modules/shared/trailer/trailer.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ],
  providers : [MovieService]
})
export class DetailModule { }
