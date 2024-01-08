import { Component, HostListener, OnInit, HostBinding } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { MovieDetails, Movie_Show } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/lazy-features/moives/movies.service';

@Component({
  selector: 'app-random-movie-generator',
  templateUrl: './random-movie-generator.component.html',
  styleUrls: ['./random-movie-generator.component.css'],
})
export class RandomMovieGeneratorComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  public movies! : Movie_Show[];
  public movieId! : number;
  randomMovie$! : Observable<MovieDetails>;
  moiveTrailer! : any;

  overwiev: boolean = false;
  loadingMovie: boolean = false;
  buttonDisplay: boolean = true;
  cardDisplay: boolean = false;

  ngOnInit(): void {

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.randomMovieGenerator()
    }
  }
  // @HostBinding('style.backgroundColor') backgroundColor = 'blue';

  randomMovieGenerator(): void {
    const randomPage: number = Math.floor(Math.random() * 499);
    this.loadingMovie = true;
    this.randomMovie$ = this.movieService.getMovieListByPage(randomPage).pipe(
      switchMap((res) => {
        this.movies = res.results;

        const randomNumber: number = Math.floor(Math.random() * 19);
        const movieId = this.movies[randomNumber].id;
        this.movieId = movieId;

        this.buttonDisplay = false; //button none
        this.loadingMovie = false;//skeleton none
        this.cardDisplay = true;

        return this.movieService.getMoiveDetail(this.movieId)
      }),
    )
  }


  watchTrailer() {
    this.movieService.getMoiveTrailer(this.movieId).subscribe(
      (data => {
        data.results.forEach((element : any) => {
          if(element.type == "Trailer"){
            this.moiveTrailer = element.key
          }
        });
      }) 
    )
  }

}
