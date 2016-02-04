import {bootstrap, provide, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product} from '../product/product.component';
import {ProductList} from './product-list.model';
import {ProductComponent} from '../product/product.component';
import {CategoriesFilterPipe} from '../categories-menu/categories-filter.pipe';

@Component({
    selector: 'products-list',
    pipes: [CategoriesFilterPipe],
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