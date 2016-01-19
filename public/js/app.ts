import {bootstrap, Component} from 'angular2/angular2';
import {ProductsListComponent} from './products-list/products-list.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {CategoryMenuComponent} from './categories-menu/categories-menu.component';
import {WishList} from './wish-list/wish-list.model';

@Component({
    selector: 'main-component',
    templateUrl: 'js/app.html',
    directives: [WishListComponent, ProductsListComponent, CategoryMenuComponent]
})
export class MainComponent {}

bootstrap(MainComponent, [WishList]);