import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPriceComponent {
  @Input() code: string = 'INR';
  @Input({ required: true }) price!: number;
  @Input({ required: true }) sellingPrice!: number;

  detectChange() {
    console.log('detected change in product price');
    //console.log(currencyCode);
  }
}
