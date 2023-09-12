import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItemData: any;
  cartQuantity!: number;
  finalPrice: number = 0;
  finalSalePrice: number = 0;
  @Output() rmvBtnClick = new EventEmitter();
  @Output() notifyParent = new EventEmitter();
  @Input() currCode: string = 'INR';

  ngOnInit(): void {
    this.finalPrice =
      this.cartItemData.productPrice * this.cartItemData.quantity;
    this.finalSalePrice =
      this.cartItemData.productSalePrice * this.cartItemData.quantity;
  }

  addItem() {
    let cartMap = new Map<number, any>(
      JSON.parse(localStorage.getItem('cart') as string)
    );
    let curData = cartMap.get(this.cartItemData.productId);
    curData.quantity += 1;
    this.cartItemData.quantity = curData.quantity;
    this.finalPrice =
      this.cartItemData.productPrice * this.cartItemData.quantity;
    this.finalSalePrice =
      this.cartItemData.productSalePrice * this.cartItemData.quantity;
    cartMap.set(this.cartItemData.productId, curData);
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
    this.notifyParent.emit();
  }

  deductItem() {
    let cartMap = new Map<number, any>(
      JSON.parse(localStorage.getItem('cart') as string)
    );
    let curData = cartMap.get(this.cartItemData.productId);
    curData.quantity -= 1;
    this.cartItemData.quantity = curData.quantity;
    this.finalPrice =
      this.cartItemData.productPrice * this.cartItemData.quantity;
    this.finalSalePrice =
      this.cartItemData.productSalePrice * this.cartItemData.quantity;
    cartMap.set(this.cartItemData.productId, curData);
    if (curData.quantity === 0) {
      cartMap.delete(curData.productId);
    }
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
    if (curData.quantity === 0) {
      this.removeItemNofify();
    }
    this.notifyParent.emit();
  }

  deleteItem() {
    let cartMap = new Map<number, any>(
      JSON.parse(localStorage.getItem('cart') as string)
    );
    let curData = cartMap.get(this.cartItemData.productId);
    cartMap.delete(curData.productId);
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
    this.removeItemNofify();
    this.notifyParent.emit();
  }

  removeItemNofify() { // for notifying parent
    this.rmvBtnClick.emit();
  }
}
