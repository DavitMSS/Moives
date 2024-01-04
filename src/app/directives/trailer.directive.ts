import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTrailer]',
})
export class TrailerDirective { 

  constructor(
    private templateRef:TemplateRef<any>,// It holds the reference to the element's content that the directive is applied to. 
    private ViewContainerRef: ViewContainerRef // is a class representing a container where Angular dynamically adds or removes views
  ){ }

  @Input() set appTrailer(condition:boolean) {
    if(condition){
      this.ViewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this.ViewContainerRef.clear()
    }
  }

}