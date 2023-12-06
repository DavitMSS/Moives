import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../moives/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public data! : any;
  constructor(
    private route : ActivatedRoute,
    private MovieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    let id! : number;
    this.route.params.subscribe((params => {
      id = +params['id']
    }))
    this.MovieService.getMoiveDetail(id).subscribe(data => {
      this.data = data
    })
  }

}
