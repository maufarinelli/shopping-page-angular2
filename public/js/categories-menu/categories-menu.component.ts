import {Component, Output} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {EventEmitter} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Product} from '../product/product.component';
import {CategorySelectedService} from './categories-menu.event-emitter.service';
import {Observable} from 'rxjs/Observable';
import {NgZone} from 'angular2/core';

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
    private http: Http;
    private zone: NgZone;
    private menuList: categoryMenu[];
    public categorySelected: CategorySelectedService;
    private categoriesUrl = '/categories';

    constructor(http: Http, categorySelectedService: CategorySelectedService) {
        this.http = http;
        this.zone = new NgZone({ enableLongStackTrace: false });

        this.http.get(this.categoriesUrl)
            .map(res => <categoryMenu[]> res.json())
            .subscribe(categories => {
                this.zone.run(() => {
                    this.menuList = categories;
                })
            });

        this.categorySelected = categorySelectedService;
    }

    onSelect(category) {
        this.categorySelected.onCategorySelected(category.categoryId);
    }
}