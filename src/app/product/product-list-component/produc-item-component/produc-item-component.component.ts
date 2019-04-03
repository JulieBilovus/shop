import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-produc-item-component',
  templateUrl: './produc-item-component.component.html',
  styleUrls: ['./produc-item-component.component.css']
})
export class ProducItemComponentComponent implements OnInit {
  @Input()
  currentProduct: IProduct;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  onBuy() {
    this.cartService.addProductToTheCart(this.currentProduct);
  }
}
