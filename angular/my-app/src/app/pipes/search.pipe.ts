import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(plist: ProductType[] | null, searchQuery: string | null): ProductType[] | null {
    if(searchQuery && plist) {
      plist = plist.filter((item) => item.productName.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    console.log("plist",plist);
    return plist;
  }

}
