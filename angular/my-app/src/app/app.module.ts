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
