/// <reference path="../../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../../node_modules/rxjs/Subject.d.ts"/>
/// <reference path="../../node_modules/rxjs/Observer.d.ts"/>
/// <reference path="../../node_modules/rxjs/observable/fromPromise.d.ts"/>
/// <reference path="../../node_modules/rxjs/operator/toPromise.d.ts"/>

import {bootstrap} from 'angular2/platform/browser'
import {provide, Component} from 'angular2/core';
import {ProductsListComponent} from './products-list/products-list.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {CategoryMenuComponent} from './categories-menu/categories-menu.component';
import {WishList} from './wish-list/wish-list.model';
import {ProductList} from './products-list/product-list.model';

@Component({
    selector: 'main-component',
    templateUrl: 'js/app.html',
    directives: [WishListComponent, ProductsListComponent, CategoryMenuComponent]
})
export class MainComponent {}

bootstrap(MainComponent, [
    provide(WishList, {useClass: WishList}),
    provide(ProductList, {useClass: ProductList})
]);