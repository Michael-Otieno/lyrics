import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener ("click") onClicks(){
    this.textColor("lightgreen")
  }
  @HostListener ("dblclick") onDoubleClicks(){
    this.textColor("black")
  }

  private textColor(action:string){
    this.elem.nativeElement.style.color=action;
  }
  

}
