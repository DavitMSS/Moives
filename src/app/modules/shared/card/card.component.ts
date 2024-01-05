import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges{

@Input() data! : any;

  
  constructor() {
    // console.log(this.data,'undefined')
   }
  
   ngOnChanges(changes: SimpleChanges): void {
    //  console.log(this.data,'ngOnchanges')
    //  console.log(changes,'changes')
   }

   ngOnInit(): void {
    //  console.log(this.data,'onInit')
   }

}
