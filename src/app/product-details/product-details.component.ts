import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../product/productservice.service';
import { Products } from '../product/product.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Products[] = [];
  id: any;
  sub: any;
  products: Products | any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductserviceService
  ) {}

  ngOnInit() {
    this.sub = this._ActivatedRoute.paramMap.subscribe(
      (params: { get: (arg0: string) => any }) => {
        this.id = params.get('id');
        let products = this._productService.getProducts();
        this.products = products.find((product) => product.id == this.id);
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }
}
