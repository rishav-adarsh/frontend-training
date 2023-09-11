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
    imgTag.src = 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg'
  }
}
