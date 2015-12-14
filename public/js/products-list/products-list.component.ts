import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product, ProductComponent} from '../product/product';

var productsList: Product[] = [
    {
        id: 100,
        title: 'Carrinho de Bebe',
        img: 'http://placehold.it/200x140',
        price: '199,90',
    },
    {
        id: 101,
        title: 'Mamadeira para Bebe',
        img: 'http://placehold.it/200x140',
        price: '29,90',
    },
    {
        id: 102,
        title: 'Fralda Pampers - Pacote',
        img: 'http://placehold.it/200x140',
        price: '49,90',
    }
];

@Component({
    selector: 'products-list',
    templateUrl: 'js/products-list/products-list.html',
    styleUrls: ['js/products-list/products-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent]
})
export class ProductsListComponent {
    public products: Product[];
    constructor() {
        this.products = productsList;
    }
    onSelect() {};
    getSelectedClass() {};
}