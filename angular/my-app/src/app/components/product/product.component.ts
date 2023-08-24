import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
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
  notifyParent(event: MouseEvent) {
    console.log(event);

    this.btnClick.emit({
      id: this.data.productId,
      name: this.data.productName,
    });
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
