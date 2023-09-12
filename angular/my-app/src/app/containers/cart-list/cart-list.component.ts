import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export default class CartListComponent implements OnInit {

  cartMap!: Map<number, any>;
  totalAmount!: number;
  itemsCount!: number;
  totalSaleAmount!: number;
  currencyCode: string = 'INR';

  constructor(private currencyService: CurrencyService) {
    currencyService.currencyObservable.subscribe(
      (data) => { this.currencyCode = data },
      (err) => { console.log(err); }
    );
  }

  ngOnInit(): void {
    this.cartMap = new Map(JSON.parse(localStorage.getItem('cart') as string));
    
    this.itemsCount = this.cartMap.size;
    
    this.totalAmount = this.totalSaleAmount = 0;
    for(let item of this.cartMap.values()) {
      this.totalAmount += item.productPrice * item.quantity;
      this.totalSaleAmount += item.productSalePrice * item.quantity;
    }
  }

  removeCartItem() {
    console.log("emit func invoked");
    
    this.cartMap = new Map<number, any>(JSON.parse(localStorage.getItem('cart') as string));
    console.log(this.cartMap);
    
    // cartMap.delete(item.productId);
    // localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
  }

  updateTotalAmount() {
    this.itemsCount = this.cartMap.size;

    this.totalAmount = this.totalSaleAmount = 0;
    for(let item of this.cartMap.values()) {
      this.totalAmount += item.productPrice * item.quantity;
      this.totalSaleAmount += item.productSalePrice * item.quantity;
    }
  }
}
