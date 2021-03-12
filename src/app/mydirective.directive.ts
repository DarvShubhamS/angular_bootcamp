import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.innerText = ' Hello , I am Custom Directive.'
  }

}
