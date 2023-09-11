import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import {
  errorTailorImports,
  provideErrorTailorConfig,
} from '@ngneat/error-tailor';
import { CurrencyComponent } from './components/currency/currency.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import ProductDetailComponent from './containers/product-detail/product-detail.component';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
import { HttpLoaderInterceptor } from './services/http-loader.interceptor';
import { LoaderModule } from './loader/loader.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { PageButtonsComponent } from './components/page-buttons/page-buttons.component';
import CartListComponent from './containers/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

// Decorator() : to define the behaviour of the class
@NgModule({
  declarations: [
    // components, directives, pipes
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    DiscountPipe,
    ConversionPipe,
    ProductPriceComponent,
    CheckoutComponent,
    CurrencyComponent,
    NumbersOnlyDirective,
    ImgFallbackDirective,
    GithubSearchComponent,
    ErrorPageComponent,
    ProductDetailComponent,
    LoginButtonsComponent,
    NavbarComponent,
    SearchPipe,
    SortPipe,
    PaginationPipe,
    PageButtonsComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    // eagerly loaded modules
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    errorTailorImports,
    HttpClientModule,
    UiModule,
    LoaderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    // services
    // global : app.component.ts (shared services) : only one object will be created and will be used globally everywhere inside the application
    // local : *.component.ts (http services) : the object will be created everytime we use it and got disposed after its usage
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true,
    },
    provideErrorTailorConfig({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          zipcode: ({ enteredCode, validCode }) =>
            `Valid pincode is ${validCode}`,
        },
      },
    }),
  ],
  bootstrap: [
    //startup components
    AppComponent,
  ],
})
export class AppModule {}
