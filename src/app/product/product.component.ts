import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../app/product/productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Products[] = [];

  constructor(private Productservice: ProductserviceService) {}
  ngOnInit(): void {
    this.products = this.Productservice.getProducts();
  }
}
export class Products {
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
}
