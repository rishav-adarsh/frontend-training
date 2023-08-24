import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';

// Deconrator() : to define the behaviour of the class
@NgModule({
  declarations: [
    // components, directives, pipes
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    DiscountPipe,
    ConversionPipe
  ],
  imports: [
    // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // services
  ],
  bootstrap: [
    //startup components
    AppComponent
  ]
})
export class AppModule { }
