import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import('./lazy-features/home/home-module').then((mod) => mod.HomePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import('./lazy-features/home/home-module').then((mod) => mod.HomePageModule),
  },
  {
    path: "movies",
    loadChildren: () =>
      import('./lazy-features/moives/movies.module').then((mod) => mod.MoivesModule),
  },
  {
    path: "tvshows",
    loadChildren: () =>
      import('./lazy-features/tvshow/tvshow.module').then((mod) => mod.TVshowModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
