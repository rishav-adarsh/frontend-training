import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  code = 'USD'
  @Input({ required: true }) data!: ProductType;
  @Output() btnClick = new EventEmitter();
  notifyParent(event: MouseEvent) {
    console.log(event);
    
    this.btnClick.emit({
      id: this.data.productId,
      name: this.data.productName,
    });
  }

  discountCalculation() {
    console.log("Discount");
    return "70% off";
  }
}

// ! : It may or may not be initialized
// ? : may be null/undefined
