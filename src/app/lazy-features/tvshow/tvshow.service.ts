import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie_Show, Movie_Show_Response } from 'src/app/interfaces/movies';
import { environment } from 'src/environments/environment';

@Injectable()
export class TvshowService {
//add interfaces
  private TVshowSubject$ : BehaviorSubject<any> = new BehaviorSubject<any>([])
  public readonly TVshowObservable$ : Observable<any> = this.TVshowSubject$.asObservable()

  constructor(private _http:HttpClient) { }


      //TVshows
  getTvShowsByPage(page:number) :Observable<Movie_Show_Response>{
    return this._http.get<any>(`${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}`)
  }

  updateTVshows(TVshowsData:any) : void{
    this.TVshowSubject$.next(TVshowsData)
  }


}
