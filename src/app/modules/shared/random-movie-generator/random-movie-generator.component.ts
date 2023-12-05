import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, catchError, map, switchMap, tap } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-random-movie-generator',
  templateUrl: './random-movie-generator.component.html',
  styleUrls: ['./random-movie-generator.component.css']
})
export class RandomMovieGeneratorComponent implements OnInit {

  constructor(public moviesService:MoviesService) { }

  public movies! : Movie[];
  public movieId! : number;
  randomMovie$! : Observable<MovieDetails>;
  moiveTrailer! : any;

  overwiev: boolean = false;
  loadingMovie: boolean = false;
  buttonDisplay: boolean = true;
  cardDisplay: boolean = false;

  ngOnInit(): void {
  //  this.getMovieRandomPage()
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.randomMovieGenerator()
    }
  }

  // getMovieRandomPage(){
  //   const randomPage = Math.floor(Math.random() * 499);
    
  //   this.MoviesService.getMovieListByPage(randomPage).subscribe(
  //     (res) => {
  //       console.log(res,'res')
  //       this.movies = res.results
  //     }
  //   )
  // }


  randomMovieGenerator(): void {
    const randomPage: number = Math.floor(Math.random() * 499);
    console.log(randomPage, 'click');
    this.loadingMovie = true;
    // this.moviesService.getMovieListByPage(randomPage).subscribe()
    this.randomMovie$ = this.moviesService.getMovieListByPage(randomPage).pipe(
      switchMap((res) => {
        console.log(res);
        this.movies = res.results;

        const randomNumber: number = Math.floor(Math.random() * 19);
        const movieId = this.movies[randomNumber].id;
        this.movieId = movieId;

        this.buttonDisplay = false; //button none
        this.loadingMovie = false;//skeleton none
        this.cardDisplay = true;

        return this.moviesService.getMoiveDetail(this.movieId)
      }),
    )
  }



  watchTrailer() {
    this.moviesService.getMoiveTrailer(this.movieId).subscribe(
      (data => {
        data.results.forEach((element : any) => {
          if(element.type == "Trailer"){
            console.log(element.key,'element Key')
            this.moiveTrailer = element.key
          }
        });
        // window.open(`https://www.youtube.com/watch?v=${this.moiveTrailer}`, '_blank');
      }) 
    )
  }

}
