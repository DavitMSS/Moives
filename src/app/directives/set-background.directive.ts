import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective {
  constructor( element : ElementRef){
    element.nativeElement.style.backgroundColor = '#ffde5b'
  }
}
