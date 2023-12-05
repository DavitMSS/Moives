import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TVshowRoutingModule } from './tvshow-routing.module';
import { TvshowPageComponent } from './tvshow-page/tvshow-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    TvshowPageComponent
  ],
  imports: [
    CommonModule,
    TVshowRoutingModule,
    SharedModule
  ]
})
export class TVshowModule { }
