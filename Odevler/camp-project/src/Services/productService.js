import axios from "axios";

export default class ProductService {
  getProducts() {
    // return axios.get("ApiUrl");
    //return axios.get("https://localhost:8080/api/products/getall");
    //return axios.get("https://jsonplaceholder.typicode.com/posts");
    return axios.get("https://dummyjson.com/products");
  }
  getByProductId(id) {
    return axios.get("https://dummyjson.com/products/" + id);
  }
}
