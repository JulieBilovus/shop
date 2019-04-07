import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProducItemComponentComponent} from './product-list-component/produc-item-component/produc-item-component.component';
import {ProductListComponentComponent} from './product-list-component/product-list-component.component';
import {ProductComponentComponent} from './product-component.component';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponentComponent,
    ProducItemComponentComponent
  ],
  exports: [
    ProductComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
