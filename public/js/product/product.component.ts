import {bootstrap, Component, Input, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {WishList} from '../wish-list/wish-list.model';

// Product
export class Product {
    id: number;
    title: string;
    img: string;
    price: string;
}

@Component({
    selector: 'product',
    templateUrl:'js/product/product.html',
    styleUrls: ['js/product/product.css'],
    directives: [CORE_DIRECTIVES]
})
export class ProductComponent {
    @Input() product: Product;
    private wishList: WishList;

    constructor(wishList: WishList) {
        this.wishList = wishList;
    }

    addProduct(product) {
        this.wishList.addWishedProduct(product);
    }
}