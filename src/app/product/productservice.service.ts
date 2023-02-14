import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../product/product.component';
@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  getProducts() {
    let products: Products[];
    products = [
      new Products(1, 'ssxsx', 1223),
      new Products(2, 'dcsxwd', 4311),
      new Products(3, 'dcsx', 6543),
    ];
    return products;
  }
  public getProduct(id: number | undefined) {
    let products: Products[] = this.getProducts();
    return products.find((products) => products.id == id);
  }
  constructor() {}
}
