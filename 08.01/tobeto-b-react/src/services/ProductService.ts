import { ProductModel } from "../models/ProductModel";
import axios from "axios";
import { GetAllProductsModel } from "../models/GetAllProductsModel";

class ProductService {
	getAll() {
		return axios.get<GetAllProductsModel>("https://dummyjson.com/products");
	}

	getById(id: number) {
		return axios.get<ProductModel>("https://dummyjson.com/products/" + id);
	}
}

export default ProductService;
