import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-random-movie-generator',
  templateUrl: './random-movie-generator.component.html',
  styleUrls: ['./random-movie-generator.component.css']
})
export class RandomMovieGeneratorComponent implements OnInit {

  constructor(public MoviesService:MoviesService) { }

  public movies! : Movie[];
  public movieId : any;
  randomMovie$! : Observable<MovieDetails>;
  moiveTrailer! : any;

  overwiev: boolean = false;
  loadingMovie: boolean = false;
  buttonDisplay: boolean = true;
  cardDisplay: boolean = false

  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe(
      (res) => {
        this.movies = res.results
      }
    )
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.randomMovieGenerator()
    }
  }


  randomMovieGenerator() {
    const randomNumber = Math.floor(Math.random() * 19);
    const movieId = this.movies[randomNumber].id;
    this.movieId = movieId;
      this.buttonDisplay = false;
      this.loadingMovie = true;
      this.cardDisplay = false

      this.randomMovie$ = this.MoviesService.getMoiveDetail(movieId);
      this.loadingMovie = false;
      this.cardDisplay = true;
    
  } 

  watchTrailer() {
    this.MoviesService.getMoiveTrailer(this.movieId).subscribe(
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
