import {bootstrap, Component, Input, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

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
}