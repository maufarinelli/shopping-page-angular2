import {Injectable} from 'angular2/core';
import {Product} from '../product/product.component';

// Mocked data
let productsList: Product[] = [
    {
        id: 100,
        categoryId: 1,
        categoryName: 'Baby Strollers',
        title: 'Baby Stroller',
        img: 'http://placehold.it/200x140',
        price: '199,90',
        isAdded: false
    },
    {
        id: 101,
        categoryId: 2,
        categoryName: 'Polypropylene Bottle',
        title: 'Bottles & accessories',
        img: 'http://placehold.it/200x140',
        price: '29,90',
        isAdded: false
    },
    {
        id: 102,
        categoryId: 3,
        categoryName: 'Diapers',
        title: 'Pampers Diapers Pak',
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
}