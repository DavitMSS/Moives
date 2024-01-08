import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../lazy-features/moives/movies.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralGuard implements CanActivate,Resolve<any> {

  constructor(private movieService: MovieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//based on condition return Boolean;
    return true;
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      return this.movieService.moviesObservable$.subscribe((e) => console.log(e,'resolve data'))
    // return this.service.getHero(route.paramMap.get('id'));
    }
  
}
