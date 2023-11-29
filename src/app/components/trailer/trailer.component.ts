import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  @Input() trailerUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
