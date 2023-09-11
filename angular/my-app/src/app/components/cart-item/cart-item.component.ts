import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItemData: any;
  cartQuantity!: number;
  finalPrice: number = 0;
  @Output() rmvBtnClick = new EventEmitter();

  ngOnInit(): void {
    // this.cartQuantity = this.cartItemData.quantity;
    this.finalPrice = this.cartItemData.productSalePrice * this.cartItemData.quantity;
  }

  addItem() {
    let cartMap = new Map<number, any>(JSON.parse(localStorage.getItem('cart') as string));
    let curData = cartMap.get(this.cartItemData.productId);
    curData.quantity += 1;
    this.cartItemData.quantity = curData.quantity;
    this.finalPrice = this.cartItemData.productSalePrice * this.cartItemData.quantity;
    cartMap.set(this.cartItemData.productId, curData);
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
  }

  deductItem() {
    let cartMap = new Map<number, any>(JSON.parse(localStorage.getItem('cart') as string));
    let curData = cartMap.get(this.cartItemData.productId);
    curData.quantity -= 1;
    this.cartItemData.quantity = curData.quantity;
    this.finalPrice = this.cartItemData.productSalePrice * this.cartItemData.quantity;
    cartMap.set(this.cartItemData.productId, curData);
    if(curData.quantity === 0) {
      cartMap.delete(curData.productId);
    }
    localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
    if(curData.quantity === 0) {
      this.removeItem();
    }
  }

  removeItem() {
    this.rmvBtnClick.emit({
      item: this.cartItemData,
    });
  }
}
