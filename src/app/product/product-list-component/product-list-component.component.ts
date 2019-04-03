import {Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/iproduct';
import {CartService} from '../../cart/services/cart.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  public products: Array<IProduct>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  buyItem(item) {
    this.cartService.addProductToTheCart(item);
  }

}
