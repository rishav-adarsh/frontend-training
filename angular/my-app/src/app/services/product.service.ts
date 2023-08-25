import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from 'src/types';

// global services : app.component.ts (shared services) : only one object will be created and will be used globally everywhere inside the project
// local services : *.component.ts (http services) : the object will be created everytime we use it and got disposed after its usage
// @Injectable({
//   providedIn: 'root'  // alternative method to register it globally
// })

@Injectable() // not created globally here
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url =
      'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.http.get<ProductType[]>(url);
  }
}
