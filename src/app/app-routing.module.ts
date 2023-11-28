import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';

export const routes: Routes = [
  {path : "" , component: HomePageComponent},
  {path : "home" , component: HomePageComponent},
  {path : "movies" , component: MoviesListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
