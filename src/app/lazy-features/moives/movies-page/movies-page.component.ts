import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MovieService } from '../movies.service';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {


  public totalRecords!:number;

  page : number = 1
  public moviesList!: Movie[]

  constructor(private movieService: MovieService) {
   }

  ngOnInit(): void {
    this.movieService.moviesObservable$.subscribe((data) => {
      this.totalRecords = data.total_results
      this.moviesList = data.results
    })
    this.getMovies(this.page)
  }


  getMovies(page : number) {
    this.movieService.getMovieListByPage(page).pipe(
      tap(moviesData => {
        this.movieService.updateMovies(moviesData)
      })
    ).subscribe()
  }


  paginate(event:any){
    this.page = ++event.page
    this.getMovies(this.page)
  }


}

