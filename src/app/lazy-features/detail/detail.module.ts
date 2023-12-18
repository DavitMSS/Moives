import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MovieService } from '../moives/movies.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
    CarouselModule
  ],
  providers : [MovieService]
})
export class DetailModule { }
