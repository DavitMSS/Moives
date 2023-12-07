import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../moives/movies.service';
import { Observable, switchMap } from 'rxjs';
import { CastMember } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() moiveTrailer!:any;
  public data$! : Observable<any>;
  public cast$! : Observable<any>
  public id : number = +this.route.snapshot.params['id'];

  constructor(
    private route : ActivatedRoute,
    private MovieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getDetails()
    this.getCast()
  }

  getDetails(){
      this.data$ = this.MovieService.getMoiveDetail(this.id)
  }


  watchTrailer() {
    this.MovieService.getMoiveTrailer(this.id).subscribe(
      (data => {
        data.results.forEach((element : any) => {
          if(element.type == "Trailer"){
            this.moiveTrailer = element.key
          }
        });
      }) 
    )
  }

  getCast(){
    this.cast$ = this.MovieService.getCast(this.id)
  }

}