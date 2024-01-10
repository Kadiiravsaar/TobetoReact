import axios from "axios";
import {useEffect, useState} from "react";
// import {GetAllProductsModel} from "../../models/GetAllProductsModel";
import {ProductModel} from "../../models/ProductModel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";
import { GetAllProductsModel } from "../../models/GetAllProductsModel";

type Props = {


};

const Homepage = (props: Props) => {
	
	const [products, setProducts] = useState<ProductModel[]>([])
	// 1- Birden fazla noktada kullanılabilir
	// 2- Sorumluluğun UI dosyası üzerinden kalkması
	// 3- Ortak bi noktadan yönetebilmek için
	useEffect(() => {
		fetchProdutcs();
	}, [])

	const fetchProdutcs = ()=>{
		// axios.get<GetAllProductsModel>("https://dummyjson.com/products")
		// .then(response =>{
		// 	setProducts(response.data.products);
		// });

		let prodService : ProductService = new ProductService();
		prodService.getAll().then(response => {
			setProducts(response.data.products);
		})

	}
	

	return (
		<div className="container">
			<div className="row">
				{products.map(products=> 
				<div key={products.id} className="col-3">
					<ProductCard product={products}></ProductCard>
				</div>
				)}
				
			</div>
		</div>
	);
};

export default Homepage;

// Formik-Yup CUMA!
// Global State Management (Redux-Context API)
// Interceptors
// toastr, loader
