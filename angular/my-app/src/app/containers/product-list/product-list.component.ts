import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductService], // local scope
})
export class ProductListComponent implements OnChanges, OnInit, OnDestroy {
  // @Input() selectedCurrencyCode!: string;
  searchQuery!: string | null;
  sortQuery!: string | null;
  currentPageno: number = 0;
  selectedCurrencyCode!: string;
  plist: ProductType[] = [];
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$: Observable<string>;
  product$: Observable<ProductType[]>;
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

  constructor(
    private productService: ProductService,
    private currencyService: CurrencyService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.curr$ = this.currencyService.currencyObservable;
    this.product$ = this.productService.getProducts();
    this.activeRoute.queryParamMap.subscribe((par) => {
      if (par.has('q')) {
        this.searchQuery = par.get('q');
      }
      if (par.has('sortBy')) {
        console.log('sort by working');
        this.sortQuery = par.get('sortBy');
      }
      if (par.has('pageno')) {
        this.currentPageno = Number(par.get('pageno'));
      }
      console.log('Activated route working');
    });
  }

  ngOnInit(): void {
    // this.getData();
    // this.currency$ = this.currencyService.currencyObservable.subscribe(
    //   (code) => (this.selectedCurrencyCode = code)
    // );
    this.currencyService.currencyObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((code) => (this.selectedCurrencyCode = code));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    // this.currency$.unsubscribe();
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
    this.router.navigateByUrl('/cart');
    // this.router.navigate(['/cart'])
  }

  detectChange() {
    console.log('detected change in product list');
  }

  changePrice() {
    // let product = this.plist[0];
    // product.productSalePrice = 900;
    // this.plist = [{ ...product }, this.plist[1]];
    this.plist = this.plist.map((item, index) => {
      if (index === 0) {
        item.productSalePrice = 900;
      }
      return item;
    });
  }

  onChange(event: Event) {
    let ele = event.target as HTMLSelectElement;
    this.router.navigate([], { 
      relativeTo: this.activeRoute,
      queryParams: { sortBy: ele.value } ,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do not trigger navigation
    });
  }
}
