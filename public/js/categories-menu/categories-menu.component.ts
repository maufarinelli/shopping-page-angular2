import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product} from '../product/product.component';

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
    directives: [CORE_DIRECTIVES]
})
export class CategoryMenuComponent {
    public menuList: categoryMenu[];
    public categorySelected: number;

    constructor() {
        this.menuList = categoriesMenuList;
    }

    onSelect(category) {
        this.categorySelected = category.categoryId;
        console.log(this.categorySelected);
    }
}