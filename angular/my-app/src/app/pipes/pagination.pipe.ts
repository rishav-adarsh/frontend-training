import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';
import { ProductType } from 'src/types';

@Pipe({
  name: 'pagination',
  pure: false, // what are pure functions? : Pure functions does not executes every time if we provide same set of input, it simply
  // takes the previously executed output and returns the same. It hence also saves the function from executing every time for the 
  // input saving the resources. Hance, pipes are preferred over normal functions as they are pure in nature by default.
})
export class PaginationPipe implements PipeTransform {

  transform(plist: ProductType[] | null, size: number | null, currentPageno: number): ProductType[] {
    console.log("start: ", plist);
    if(!plist || !size) return [];
    let pagewiseProducts: ProductType[][] = [];
    let i = 0;
    while(i < plist.length) {
      pagewiseProducts.push(plist.slice(i, Math.min(i+size, plist.length)));
      i += size;
    }
    console.log("org : ", plist);
    
    console.log("pagination : ", pagewiseProducts);
    return pagewiseProducts[currentPageno];
  }

}
