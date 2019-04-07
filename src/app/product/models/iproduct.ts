import { ProductCategoriesEnum } from './product-categories-enum.enum';

export interface IProduct {
  id: number,
  name: string;
  description: string;
  price: number;
  category: ProductCategoriesEnum;
  isAvailable: boolean;
  photoUrl?: string;
  count?: number;
}
