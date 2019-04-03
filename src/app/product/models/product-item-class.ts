import { IProduct } from './iproduct';

export class ProductItem implements IProduct {
  constructor(
    public name,
    public description,
    public price,
    public category,
    public isAvailable,
    public photoUrl
  ) {
    this.photoUrl = photoUrl || 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png';
  }
}
