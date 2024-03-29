import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import ProductDetailComponent from './containers/product-detail/product-detail.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { authGuard } from './services/auth.guard';
import CartListComponent from './containers/cart-list/cart-list.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  // abc.com
  { path: '', component: HomeComponent },
  // abc.com/products
  { path: 'products', component: ProductListComponent },
  // abc.com/detail/100
  { path: 'detail/:pid', component: ProductDetailComponent },
  // abc.com/github
  { path: 'github', component: GithubSearchComponent },
  // abc.com/checkout
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  // abc.com/user
  // lazy laoded modules : only loading the UserModule when it's required and hence making other functionalities fast
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./user/orders/orders.module').then((m) => m.OrdersModule),
  },
  { path: 'cart', component: CartListComponent },
  // 404 Page : this is always the last one in the sequence
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // can export component, directive, pipe, module  but not service
})
export class AppRoutingModule {}
