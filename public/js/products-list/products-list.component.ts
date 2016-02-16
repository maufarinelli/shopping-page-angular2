import {provide, Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Product} from '../product/product.component';
import {ProductList} from './product-list.model';
import {ProductComponent} from '../product/product.component';

@Component({
    selector: 'products-list',
    templateUrl: 'js/products-list/products-list.html',
    styleUrls: ['js/products-list/products-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent]
})
export class ProductsListComponent {
    private products: Product[];

    constructor(productsList: ProductList) {
        this.products = productsList.getProductList();
    }
}