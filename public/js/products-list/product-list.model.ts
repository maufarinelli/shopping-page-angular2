import {Injectable} from 'angular2/angular2';
import {Product} from '../product/product.component';

// Mocked data
let productsList: Product[] = [
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

@Injectable()
export class ProductList {
    public productList: Product[];

    constructor() {
        this.productList = productsList;
    }

    getProductList() {
        return this.productList;
    }

    /*setProductList(list: Product[]) {
        this.productList = list;
    }*/
}