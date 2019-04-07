import { Injectable } from '@angular/core';
import { IProduct } from '../../product/models/iproduct';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart = {};
  public productInCartChanged = new Subject<any>();

  constructor() { }

  public getProductsInCart() {
    return this.productsInCart;
  }

  public addProductToTheCart(product: IProduct) {
    if (this.productsInCart[product.id]) {
      this.productsInCart[product.id].count++;
    } else {
      this.productsInCart[product.id] = {
        ...product,
        count: 1
      };
    }

    this.productInCartChanged.next(this.productsInCart);
  }

  public removeAllProducts() {
    this.productsInCart = {};
    this.productInCartChanged.next(this.productsInCart);
  }
}
