import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MovieService } from '../lazy-features/moives/movies.service';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService implements Resolve<any> {

  constructor(
    private _http : HttpClient,
    private _moviesService: MovieService,
    private _route : Router
    ) { }

    // resolve ფუნქცია რომელიც აბრუნებს ინფორმაციას და თავად უკეთბს subscribe-ს და unsubscribe-საც
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<any> | null{
    return null
  }


  search(inputValue : string){
    return this._http.get(`${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&language=en-US&query=${inputValue}`)
  }  

  
}
