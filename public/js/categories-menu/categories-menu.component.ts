import {Component, Output} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {EventEmitter} from 'angular2/core';
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
    outputs: ['onCategorySelected'],
    templateUrl: 'js/categories-menu/categories-menu.html',
    styleUrls: ['js/categories-menu/categories-menu.css'],
    directives: [CORE_DIRECTIVES]
})
export class CategoryMenuComponent {
    private menuList: categoryMenu[];
    private categorySelected: number;
    public onCategorySelected: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.menuList = categoriesMenuList;
    }

    onSelect(category) {
        this.categorySelected = category.categoryId;
        console.log(this.onCategorySelected);
        //this.onCategorySelected.emit('categorySelected', category.categoryId);
    }
}