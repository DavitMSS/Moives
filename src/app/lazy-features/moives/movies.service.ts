import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, of, switchMap, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {

  // movieListRefresh$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  //add interfaces!!!
  private moviesSubject$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  public readonly moviesObservable$: Observable<any> = this.moviesSubject$.asObservable()




  constructor(private _http:HttpClient) { }


  getMovieListByPage(page:number) : void{

    this._http.get<any>(`${environment.baseUrl}/discover/movie?api_key=${environment.apiKey}&page=${page}`).subscribe({
        next: (moviesData) => {
          console.log("SERVICE NEXT")
          this.moviesSubject$.next(moviesData)
        }
      }//subscribe
      )

  }


  // test(){
  //   this.movieListRefresh$.pipe(switchMap(() => of('salami'))).subscribe({ // lstener
  //     next: (res) => console.log(res)
  //   })

  //   interval(1000).pipe(take(10)).subscribe({
  //     next: (res) => {
  //       this.movieListRefresh$.next(res) //publisher
  //     }
  //   })
  // }

}
