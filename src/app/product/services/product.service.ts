import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductItem } from '../models/product-item-class';
import { ProductCategoriesEnum } from '../models/product-categories-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Array<IProduct> = [
    new ProductItem(
      1,
      'some phone',
      'It is awesome phone',
      1200,
      ProductCategoriesEnum.SMARTPHONES,
      true,
      'https://www.euronics.ee/UserFiles/Products/Images/166514-nokia-3310-blue-1.png'
    ),
    new ProductItem(
      2,
      'some phone',
      'It is awesome phone',
      1200,
      ProductCategoriesEnum.SMARTPHONES,
      false
    ),
    new ProductItem(
      3,
      'some phone',
      'It is awesome phone',
      1200,
      ProductCategoriesEnum.SMARTPHONES,
      true,
      'https://www.euronics.ee/UserFiles/Products/Images/166514-nokia-3310-blue-1.png'
    )
  ];

  constructor() { }

  public getProducts() {
    return this.products.slice();
  }
}
