import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollheight]'
})
export class ScrollheightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onMouseEnter() {
    this.scrollheight();
  }

  private scrollheight() {
    const elem = this.el.nativeElement;
    elem.style.height = '22px';
    if (elem.clientHeight < elem.scrollHeight)
      elem.style.height = elem.scrollHeight + 'px';
  }
}
