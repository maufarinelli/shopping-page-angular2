import {bootstrap, Component} from 'angular2/angular2';
import {ProductsListComponent} from './products-list/products-list.component';
import {WishListComponent} from './wish-list/wish-list.component';

@Component({
    selector: 'main-component',
    template: '<products-list>loading...</products-list><wish-list>loading...</wish-list>',
    directives: [WishListComponent, ProductsListComponent]
})
export class MainComponent {}

bootstrap(MainComponent);