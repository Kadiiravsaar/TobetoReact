import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}> </Route>
        <Route path="/products" element={<Products></Products>}> </Route>
        <Route path="*" element={<div>Not found</div>}> </Route>
        {/* * kullanıcı pathi boş olduğunda beni hata sayfasına yönlendir  */}

        {/* // kullanıcı pathi path="/products olduğunda beni Products sayfasına yönlendir  */}
      </Routes>
    </BrowserRouter>

  );
}
