import {provide, Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Product} from '../product/product.component';
import {ProductList} from './product-list.model';
import {ProductComponent} from '../product/product.component';
import {CategorySelectedService} from '../categories-menu/categories-menu.event-emitter.service';
import * as _ from 'lodash';

@Component({
    selector: 'products-list',
    templateUrl: 'js/products-list/products-list.html',
    styleUrls: ['js/products-list/products-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent]
})
export class ProductsListComponent {
    private allProducts: Product[];
    private products: Product[];
    private categorySelected: CategorySelectedService;

    constructor(productsList: ProductList, categorySelectedService: CategorySelectedService) {
        this.allProducts = productsList.getProductList();
        this.products = this.allProducts;

        this.categorySelected = categorySelectedService;
        this.categorySelected.categorySelected.subscribe(data=>this.filterProductsByCategory(data));
    }

    filterProductsByCategory(id) {
        if(id > 0) {this.products = _.filter(this.allProducts, {categoryId: id});}
        else {this.products = this.allProducts;}
    }
}