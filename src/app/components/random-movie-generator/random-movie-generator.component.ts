import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-random-movie-generator',
  templateUrl: './random-movie-generator.component.html',
  styleUrls: ['./random-movie-generator.component.css']
})
export class RandomMovieGeneratorComponent implements OnInit {

  constructor(public MoviesService:MoviesService) { }

  public movies! : Movie[]
  randomMovie$! :Observable<MovieDetails>
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

      this.buttonDisplay = false;
      this.loadingMovie = true;
      this.cardDisplay = false

    setTimeout(() => {
      this.randomMovie$ = this.MoviesService.getMoiveDetail(movieId);
      this.loadingMovie = false;
      this.cardDisplay = true;
    }, 1000);
  }

}
