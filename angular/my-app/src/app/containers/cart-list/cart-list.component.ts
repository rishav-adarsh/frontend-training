import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export default class CartListComponent implements OnInit {

  cartMap!: Map<number, any>;

  ngOnInit(): void {
    this.cartMap = new Map(JSON.parse(localStorage.getItem('cart') as string));
  }

  removeCartItem(item: any) {
    console.log("emit func invoked");
    
    this.cartMap = new Map<number, any>(JSON.parse(localStorage.getItem('cart') as string));
    console.log(this.cartMap);
    
    // cartMap.delete(item.productId);
    // localStorage.setItem('cart', JSON.stringify(Array.from(cartMap.entries())));
  }
}
