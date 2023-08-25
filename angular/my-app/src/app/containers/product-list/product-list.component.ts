import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductService],
})
export class ProductListComponent implements OnChanges, OnInit {
  @Input() selectedCurrencyCode!: string;
  plist: ProductType[] = [];
  // plist: ProductType[] = [
  //   {
  //     productId: 101,
  //     productImage:
  //       // 'https://target.scene7.com/is/image/Target/GUEST_4d118dc6-07e7-40ab-a52d-3a143c275115?wid=488&hei=488&fmt=pjpeg', // copy/paste in asset folder.
  //       'image.jpg',
  //     productName: 'test1',
  //     productPrice: 1500.279,
  //     productStock: 18,
  //     productSalePrice: 1000,
  //   },
  //   {
  //     productId: 102,
  //     productImage:
  //       'https://target.scene7.com/is/image/Target/GUEST_4d118dc6-07e7-40ab-a52d-3a143c275115?wid=488&hei=488&fmt=pjpeg', // copy/paste in asset folder.
  //     productName: 'test2',
  //     productPrice: 1800.842,
  //     productStock: 22,
  //     productSalePrice: 1200,
  //   },
  // ];

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('success', data);
        this.plist = data;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  addItem(data: any) {
    console.log('Item added to cart', data);
  }

  detectChange() {
    console.log('detected change in product list');
  }

  changePrice() {
    // let product = this.plist[0];
    // product.productSalePrice = 900;
    // this.plist = [{ ...product }, this.plist[1]];
    this.plist = this.plist.map((item,index) => {
      if(index === 0) {
        item.productSalePrice = 900;
      }
      return item;
    })
  }
}
