import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { IProduct } from '../product/models/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  public cartProducts: Array<IProduct> = [];
  private subscription: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getProductsInCart();
    this.subscription = this.cartService.productInCartChanged.subscribe(
      (products: Array<IProduct>) => this.cartProducts = products
    );
  }

  removeAllProducts() {
    this.cartService.removeAllProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
