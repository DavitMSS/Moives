import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MovieDetails, MovieResponse } from '../interfaces/movies';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private _http: HttpClient
    ) { }


  getMovies():Observable<MovieResponse>{
    return this._http.get<MovieResponse>(`${environment.baseUrl}/discover/movie?api_key=${environment.apiKey}`)
  }

  getMoiveDetail(movieId:number):Observable<MovieDetails>{
    return this._http.get<MovieDetails>(`${environment.baseUrl}/movie/${movieId}?api_key=${environment.apiKey}`)
  }
  getMoiveTrailer(movieId:number):Observable<any>{
    return this._http.get<any>(`${environment.baseUrl}/movie/${movieId}/videos?api_key=${environment.apiKey}`)
  }


}
