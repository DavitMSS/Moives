import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';


import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
