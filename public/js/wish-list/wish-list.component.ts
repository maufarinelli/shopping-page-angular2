import {provide, Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
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