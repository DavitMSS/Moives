import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvshowPageComponent } from './tvshow-page/tvshow-page.component';

const routes: Routes = [
  {
    path:"",
    component:TvshowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TVshowRoutingModule { }
