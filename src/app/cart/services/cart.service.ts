import { Injectable } from '@angular/core';
import { IProduct } from '../../product/models/iproduct';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart: Array<IProduct> = [];
  public productInCartChanged = new Subject<Array<IProduct>>();

  constructor() { }

  public getProductsInCart(): Array<IProduct> {
    return this.productsInCart.slice();
  }

  public addProductToTheCart(product: IProduct) {
    this.productsInCart.push(product);
    this.productInCartChanged.next(this.productsInCart.slice());
  }

  public removeAllProducts() {
    this.productsInCart = [];
    this.productInCartChanged.next(this.productsInCart.slice());
  }
}
