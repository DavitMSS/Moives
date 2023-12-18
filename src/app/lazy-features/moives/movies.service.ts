import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, of, switchMap, take } from 'rxjs';
import { CastMember, MovieDetails } from 'src/app/interfaces/movies';
import { environment } from 'src/environments/environment';

@Injectable()
//provider in root წაშლილი გვაქვს შესაბამისად მხოლოდ იმ მოდულებში იქნება მისაწვდომი
//ეს სერვისი რომელ მოდულშიც providers მასივში ავღწერთ.
export class MovieService {
  //add interfaces!!!
  private moviesSubject$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  public readonly moviesObservable$: Observable<any> = this.moviesSubject$.asObservable()

  constructor(private _http:HttpClient) { }


  getMovieListByPage(page:number){
   return this._http.get<any>(`${environment.baseUrl}/discover/movie?api_key=${environment.apiKey}&page=${page}`)
  }

  updateMovies(moviesData: any): void {
    this.moviesSubject$.next(moviesData)
  }

  getMoiveDetail(id:number):Observable<MovieDetails>{
    return this._http.get<MovieDetails>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`)
  }
    //// INTERFACES

  getMoiveTrailer(id:number):Observable<any>{
    return this._http.get<any>(`${environment.baseUrl}/movie/${id}/videos?api_key=${environment.apiKey}`)
  }

  getCast(id:number): Observable<any>{
    return this._http.get<any>(`${environment.baseUrl}/movie/${id}/credits?api_key=${environment.apiKey}`)
  }

}
