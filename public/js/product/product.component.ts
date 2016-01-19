import {bootstrap, Component, Input, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {WishList} from '../wish-list/wish-list.model';
import {categoryMenu} from '../categories-menu/categories-menu.component';

// Product
export class Product {
    id: number;
    categoryId: number;
    categoryName: string;
    title: string;
    img: string;
    price: string;
    isAdded: boolean;
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
        this.toogleProductAdded(product);
    }

    removeProduct(product) {
        this.wishList.removeWishedProduct(product);
        this.toogleProductAdded(product);
    }

    private toogleProductAdded(product) {
        product.isAdded = !product.isAdded;
    }
}