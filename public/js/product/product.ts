import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

// Products
class Product {
    id: number;
    title: string;
    img: string;
    price: string;
}

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
    selector: 'product',
    templateUrl:'js/product/product.html',
    styleUrls: ['js/product/product.css'],
    directives: [FORM_DIRECTIVES]
})
export class ProductComponent {
    public products = productsList;
    onSelect() {};
    getSelectedClass() {};
}