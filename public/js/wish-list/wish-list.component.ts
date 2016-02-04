import {bootstrap, provide, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {WishList} from './wish-list.model';
import {ProductComponent} from '../product/product.component';

@Component({
    selector: 'wish-list',
    templateUrl: 'js/wish-list/wish-list.html',
    styleUrls: ['js/wish-list/wish-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent]
})
export class WishListComponent {
    private wishList: WishList;

    constructor(wishList: WishList) {
        this.wishList = wishList;
    }
}