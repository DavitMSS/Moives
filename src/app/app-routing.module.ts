import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralGuard } from './guards/general.guard';
import { APIService } from './services/api.service';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import('./lazy-features/home/home-module').then((mod) => mod.HomePageModule),
      // pathMatch:'full'
  },
  {
    path: "home",
    loadChildren: () =>
      import('./lazy-features/home/home-module').then((mod) => mod.HomePageModule),
  },
  {
    path: "movies",
    loadChildren: () =>
      import('./lazy-features/moives/movies.module').then((mod) => {
        console.log(mod,'module')
        return mod.MoivesModule
      }),
      canActivate:[GeneralGuard]
  },
  {
    path: "tvshows",
    loadChildren: () =>
      import('./lazy-features/tvshow/tvshow.module').then((mod) => mod.TVshowModule),
  },
  {
    path:"404",
    loadChildren: () => 
    import("./modules/page-not-found/page-not-found.module").then((mod) => mod.PageNotFoundModule),
    // outlet:'404'
  },
  {
    path: '**',
    redirectTo:'404',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
