import {provide, Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Product} from '../product/product.component';
import {ProductList} from './product-list.model';
import {ProductComponent} from '../product/product.component';
import {CategorySelectedService} from '../categories-menu/categories-menu.event-emitter.service';
import * as _ from 'lodash';
import {NgZone} from 'angular2/core';

@Component({
    selector: 'products-list',
    templateUrl: 'js/products-list/products-list.html',
    styleUrls: ['js/products-list/products-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent],
    providers: [HTTP_PROVIDERS]
})
export class ProductsListComponent {
    private allProducts: Product[];
    private errorMessage: string;
    private products: Product[];
    private categorySelected: CategorySelectedService;
    private zone: NgZone;

    constructor(productsList: ProductList, categorySelectedService: CategorySelectedService) {
        this.init(productsList);
        this.zone = new NgZone({ enableLongStackTrace: false });

        this.categorySelected = categorySelectedService;
        this.categorySelected.categorySelected.subscribe(data=>this.filterProductsByCategory(data));
    }

    private init(productsList):void {
        productsList.getHttpProductList().subscribe(products => {
            this.allProducts = <Product[]> products;
            this.zone.run(() => {
                this.products = this.allProducts;
            });
        }, error => this.errorMessage = <any>error);
    }

    filterProductsByCategory(id) {
        if(id > 0) {this.products = _.filter(this.allProducts, {categoryId: id});}
        else {this.products = this.allProducts;}
    }
}