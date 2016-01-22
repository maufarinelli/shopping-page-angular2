import {bootstrap, provide, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {ProductList} from './product-list.model';
import {ProductComponent} from '../product/product.component';

@Component({
    selector: 'products-list',
    templateUrl: 'js/products-list/products-list.html',
    styleUrls: ['js/products-list/products-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent],
    providers: [provide(ProductList, {useClass: ProductList})]
})
export class ProductsListComponent {
    private products: ProductList;
    constructor(productsList: ProductList) {
        this.products = productsList;
    }
    onSelect(product) {}
}