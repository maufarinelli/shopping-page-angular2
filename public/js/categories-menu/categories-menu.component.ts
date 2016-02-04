import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product} from '../product/product.component';
import {ProductList} from './products-list/product-list.model';

export class categoryMenu {
	categoryId: number;
	categoryName: string;
}

var categoriesMenuList: categoryMenu[] = [
	{ categoryId: 1, categoryName: 'Carrinhos de bebe' },
	{ categoryId: 2, categoryName: 'Mamadeiras e accessorios' },
	{ categoryId: 3, categoryName: 'Fraldas' },
];

@Component({
    selector: 'categories-menu',
    templateUrl: 'js/categories-menu/categories-menu.html',
    styleUrls: ['js/categories-menu/categories-menu.css'],
    directives: [CORE_DIRECTIVES, ProductList]
})
export class CategoryMenuComponent {
    private menuList: categoryMenu[];
    private categorySelected: number;
    private productList: ProductList;

    constructor(productsList: ProductList) {
        this.menuList = categoriesMenuList;
        this.productList = productsList.getProductList();
    }

    onSelect(category) {
        this.categorySelected = category.categoryId;
        this.productList.filterProductList(this.categorySelected);
    }
}