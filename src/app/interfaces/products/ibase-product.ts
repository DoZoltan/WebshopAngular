import { ProductTypeEnum } from './../../enums/product-type-enum';
export interface IBaseProduct
{
    iD: Number;
    productName: String;
    brand: String;
    imgURL: String;
    acquisitionPrice: Number;
    sellPrice: Number;
    productType: ProductTypeEnum;
}
