import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tvshow-page',
  templateUrl: './tvshow-page.component.html',
  styleUrls: ['./tvshow-page.component.css']
})
export class TvshowPageComponent implements OnInit {

  public tvShowsList!: any[]
  page : number = 1
  
  constructor(private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getTvShowsByPage()
  }



  getTvShowsByPage(){
    this.MoviesService.getTvShowsByPage(this.page).pipe(
      tap(data => {
        this.tvShowsList = data.results
      })
    ).subscribe()
  }

}
