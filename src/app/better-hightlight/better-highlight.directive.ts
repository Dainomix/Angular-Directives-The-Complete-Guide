import {
   Directive,
   Renderer2,
   OnInit,
   ElementRef,
   HostListener,
   HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit():void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  } // better approach of accessing the DOM
  /*
  Why?
  Angular is not limited to running in the browser here
  it, for example, also works with service workers
  and these are environmnets where you might not have access to the DOM
  So if i try to change the DOM as i did here in basic highlight by directly accessing the native element and the style of the element,
  i might get an error in some circumstances.
  Now to be honest, in most circumstances i probably don't and i probably also know
  if my app is going to run in the browser or not, still it is a better ractice to use the renderer for DOM access
  and to use the methods the rederer provides to access the DOM.
  */

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
