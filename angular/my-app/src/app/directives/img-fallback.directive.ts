import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'img', // will be automatically be applied to all img elements
  // using generic selectors will apply the directive behavior to the element by default
})
export class ImgFallbackDirective {
  constructor() {}

  @HostListener('error', ['$event'])
  switchToFallBack(event: Event) {
    const imgTag = event.target as HTMLImageElement;
    imgTag.src =
      'https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg';
  }
}
