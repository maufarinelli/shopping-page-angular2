import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product, ProductComponent} from '../product/product.component';

var productsList: Product[] = [
    {
        id: 100,
        categoryName: 'Carrinhos de bebe',
        categoryId: 1,
        title: 'Carrinho de Bebe',
        img: 'http://placehold.it/200x140',
        price: '199,90',
        isAdded: false
    },
    {
        id: 101,
        categoryName: 'Mamadeiras e accessorios',
        categoryId: 2,
        title: 'Mamadeira  para Bebe',
        img: 'http://placehold.it/200x140',
        price: '29,90',
        isAdded: false
    },
    {
        id: 102,
        categoryName: 'Fraldas',
        categoryId: 2,
        title: 'Fralda Pampers - Pacote',
        img: 'http://placehold.it/200x140',
        price: '49,90',
        isAdded: false
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