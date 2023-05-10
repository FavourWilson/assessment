import http from "../http-common"


class ProductService{
    getAll() {
        return http.get("/products")
    }


    create(data) {
        return http.post('/products', data);
    }
}


export default new ProductService;