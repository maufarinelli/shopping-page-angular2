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
        img: 'http://placehold.it/140x100',
        price: '199,90',
    },
    {
        id: 101,
        title: 'Mamadeira para Bebe',
        img: 'http://placehold.it/140x100',
        price: '29,90',
    },
    {
        id: 102,
        title: 'Fralda Pampers - Pacote',
        img: 'http://placehold.it/140x100',
        price: '49,90',
    }
];

@Component({
    selector: 'product',
    template: `
        <h1>Todos os produtos</h1>
        <ul class="products-list">
          <li *ng-for="#product of products"
            (click)="onSelect(product)"
            [ng-class]="getSelectedClass(product)">
            <a class="product-wrapper">
                <h3>{{product.title}}</h3>
                <img src="{{product.img}}">
                <p>{{product.price}}</p>
            </a>
          </li>
        </ul>
        `,
    styles: [`
        .products-list {list-style-type: none}
        .products-list li {display: inline-block; margin-right: 10px}
        .products-list a {color: #000;}
    `],
    directives: [FORM_DIRECTIVES]
})
class ProductComponent {
    public products = productsList;
    onSelect() {};
    getSelectedClass() {};
}

bootstrap(ProductComponent);