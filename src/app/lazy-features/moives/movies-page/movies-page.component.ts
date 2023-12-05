import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {


  public totalRecords!:number;

  page : number = 1
  //interfaces
  public moviesList!: any[]

  constructor(private MoviesService:MoviesService, private movieService: MovieService) {
    console.log('constructor')
   }

  ngOnInit(): void {
  //  this.getMovieList()
  // this.movieService.test();
  //  this.getMovies(this.page)
console.log("ONINIT")
  this.movieService.moviesObservable$.subscribe((data) => {
    console.log('Observable subscribe',data)
    this.totalRecords = data.total_results
    this.moviesList = data.results
  })
  // this.paginate(this.page)
  this.getMovies(this.page)
    // this.getMovies(this.page)
  }


  // getMovieList(){
  //   this.MoviesService.getMovieListByPage(this.page).pipe(
  //     tap(data => {
  //       console.log(data,'datamovies')
  //       this.moviesList = data.results
  //       this.totalRecords = data.total_results

  //     })
  //   ).subscribe()
  // }

  getMovies(page : number) {
    console.log('getMovies function')
    this.movieService.getMovieListByPage(page);
  }


  paginate(event:any){
    console.log(event.page,'event.page')
    this.page = ++event.page
    this.getMovies(this.page)
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }


}

