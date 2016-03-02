import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductList {
    public productList: Product[];
    private productListUrl = '/product-list';

    constructor(private http: Http) {
        this.http = http;
    }

    getHttpProductList() {
        return this.http.get(this.productListUrl)
            .map(res => this.productList = <Product[]> res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }

    getProductList() {
        return this.productList;
    }
}