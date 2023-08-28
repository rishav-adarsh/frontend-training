import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';

const routes: Routes = [
  // abc.com
  { path: '', component: DemoComponent },
  // abc.com/products
  { path: 'products', component: ProductListComponent },
  // abc.com/checkout
  { path: 'checkout', component: CheckoutComponent },
  // 404 Page : this is always the last one in the sequence 
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // can export component, directive, pipe, module  but not service
})
export class AppRoutingModule {}
