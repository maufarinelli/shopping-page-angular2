import {Injectable} from 'angular2/angular2';
import {Product} from '../product/product.component';
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

    removeWishedProduct(product: Product) {
        var index = 0;
        this.wishedProducts.forEach(function(element, i) {
            if(element.id === product.id) {
                index = i;
            }
        });

        this.wishedProducts.splice(index, 1);
    }
}