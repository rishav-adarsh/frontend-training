import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    plist: ProductType[] | null,
    sortQuery: string | null
  ): ProductType[] | null {
    console.log('sort by pipe working');
    if (sortQuery && plist) {
      if (sortQuery === 'name')
        plist = plist.sort((a, b) =>
          a.productName.toLowerCase().localeCompare(b.productName.toLowerCase())
        );
      else if (sortQuery === 'price')
        plist = plist.sort((a, b) => a.productSalePrice - b.productSalePrice);
    }
    console.log(plist);
    return plist;
  }
}
