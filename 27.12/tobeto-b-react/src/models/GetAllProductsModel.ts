import { ProductModel } from "./ProductModel";

export interface GetAllProductsModel {
    id: number;
    name: string;
    products: ProductModel[];
}

