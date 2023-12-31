import { Component, ElementRef, HostListener, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../moives/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  public moiveTrailer!:any;
  public data! : any;
  public cast$! : Observable<any>
  public id : number = +this.route.snapshot.params['id'];

  constructor(
    private route : ActivatedRoute,
    private MovieService: MovieService,
    ) { }


  ngOnInit(): void {
    this.getCast()
    this.data = this.route.snapshot.data['detail']
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