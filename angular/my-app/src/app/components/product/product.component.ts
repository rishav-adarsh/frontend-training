import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  code = 'USD';
  @Input() selectedCode!: string;
  @Input({ required: true }) data!: ProductType;
  @Output() btnClick = new EventEmitter();
  router = inject(Router);

  addToCart(event: MouseEvent) {
    console.log(event);

    let cartMap = new Map<number, any>([]);
    if (localStorage.getItem('cart')) {
      cartMap = new Map(JSON.parse(localStorage.getItem('cart') as string));
    }
    if (cartMap.has(this.data.productId)) {
      let curData = cartMap.get(this.data.productId);
      curData.quantity += 1;
      console.log('curData:', curData);
      cartMap.set(this.data.productId, curData);
    } else {
      console.log('itm:', { ...this.data, quantity: 1 });
      cartMap.set(this.data.productId, { ...this.data, quantity: 1 });
      console.log('map:', cartMap);
    }
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));

    // this.btnClick.emit({
    //   id: this.data.productId,
    //   name: this.data.productName,
    // });
  }

  discountCalculation() {
    console.log('Discount');
    return '70% off';
  }

  detectChange() {
    console.log('detected change in product');
  }
}

// ! : It may or may not be initialized
// ? : may be null/undefined
