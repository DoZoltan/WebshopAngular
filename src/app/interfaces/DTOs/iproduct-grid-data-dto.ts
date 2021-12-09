import { ProductTypeEnum } from "src/app/enums/product-type-enum";

export interface IProductGridDataDTO 
{
    iD: Number;
    productName: String;
    brand: String;
    sellPrice: Number;
    productType: ProductTypeEnum;
}
