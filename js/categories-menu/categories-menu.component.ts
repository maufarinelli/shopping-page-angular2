import {Component, Output} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {EventEmitter} from 'angular2/core';
import {Product} from '../product/product.component';
import {CategorySelectedService} from './categories-menu.event-emitter.service'

export class categoryMenu {
	categoryId: number;
	categoryName: string;
}

var categoriesMenuList: categoryMenu[] = [
	{ categoryId: 0, categoryName: 'All Products' },
	{ categoryId: 1, categoryName: 'Baby Strollers' },
	{ categoryId: 2, categoryName: 'Bottles & accessories' },
	{ categoryId: 3, categoryName: 'Diapers' },
];

@Component({
    selector: 'categories-menu',
    templateUrl: 'js/categories-menu/categories-menu.html',
    styleUrls: ['js/categories-menu/categories-menu.css'],
    directives: [CORE_DIRECTIVES]
})
export class CategoryMenuComponent {
    private menuList: categoryMenu[];
    public categorySelected: CategorySelectedService;

    constructor(categorySelectedService: CategorySelectedService) {
        this.menuList = categoriesMenuList;
        this.categorySelected = categorySelectedService;
    }

    onSelect(category) {
        this.categorySelected.onCategorySelected(category.categoryId);
    }
}