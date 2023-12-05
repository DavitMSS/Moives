import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs/operators';

import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tvshow-page',
  templateUrl: './tvshow-page.component.html',
  styleUrls: ['./tvshow-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvshowPageComponent implements OnInit {

  public tvShowsList!: any[]
  page : number = 1
  public totalRecords!:number;

  
  constructor(private TvshowService:TvshowService) { }

  ngOnInit(): void {

    this.TvshowService.TVshowObservable$.subscribe(
      (data) => {
        this.tvShowsList = data.results;
        this.totalRecords = data.total_results;
      }
    )
    this.getTvShowsByPage(this.page)
  }


//subscribe request and next the subject
  getTvShowsByPage(page:number){
    this.TvshowService.getTvShowsByPage(page).pipe(
      tap(TVshowsData => {
        this.TvshowService.updateTVshows(TVshowsData)
      })
    ).subscribe()
  }

  paginate(event:any){
    this.page = ++event.page
    this.getTvShowsByPage(this.page)
  }


}
