import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product, ProductComponent} from '../product/product.component';

var productsList: Product[] = [
    {
        id: 100,
        categoryId: 1,
        categoryName: 'Carrinhos de bebe',
        title: 'Carrinho de Bebe',
        img: 'http://placehold.it/200x140',
        price: '199,90',
        isAdded: false
    },
    {
        id: 101,
        categoryId: 2,
        categoryName: 'Mamadeiras e accessorios',
        title: 'Mamadeira  para Bebe',
        img: 'http://placehold.it/200x140',
        price: '29,90',
        isAdded: false
    },
    {
        id: 102,
        categoryId: 2,
        categoryName: 'Fraldas',
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