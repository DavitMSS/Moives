import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../moives/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() moiveTrailer!:any;
  public data! : any;
  public Id! : number;

  constructor(
    private route : ActivatedRoute,
    private MovieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.route.params.subscribe((params => {
      this.Id = +params['id']
    }))
    this.MovieService.getMoiveDetail(this.Id).subscribe(data => {
      this.data = data
    })
  }
  watchTrailer() {
    this.MovieService.getMoiveTrailer(this.Id).subscribe(
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
