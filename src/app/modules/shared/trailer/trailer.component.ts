import { Component, Input, OnInit } from '@angular/core';
import { TrailerDirective } from 'src/app/directives/trailer.directive';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
  providers: [TrailerDirective]

})
export class TrailerComponent implements OnInit {
  @Input() trailerUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
