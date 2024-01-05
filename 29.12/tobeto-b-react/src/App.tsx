import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/AddProduct/AddProduct";

function App(): ReactElement {
	return (
		<> 
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/product-detail" element={<ProductDetail></ProductDetail>}></Route>
				<Route path="/product-detail/:id" element={<ProductDetail></ProductDetail>}></Route>
				<Route path="/add-product" element={<AddProduct></AddProduct>}></Route>



			</Routes>
		</>
	);
}

export default App;