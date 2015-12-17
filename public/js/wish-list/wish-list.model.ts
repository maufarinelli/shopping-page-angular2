import {Injectable} from 'angular2/angular2';
import {Product, ProductComponent} from '../product/product.component';
//import _ = require('lodash');

@Injectable()
export class WishList {
    public wishedProducts: Product[];
    constructor() {
        this.wishedProducts = [];
    }

    getWishedProducts() {
        return this.wishedProducts;
    }

    setWishedProducts(products) {
        this.wishedProducts = products;
    }

    addWishedProduct(product: Product) {
        this.wishedProducts.push(product);
    }
}