import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product, ProductComponent} from '../product/product.component';

@Component({
    selector: 'wish-list',
    templateUrl: 'js/wish-list/wish-list.html',
    styleUrls: ['js/wish-list/wish-list.css'],
    directives: [CORE_DIRECTIVES, ProductComponent]
})
export class WishListComponent {
    public wishedProducts: Product[];
    constructor() {
        this.wishedProducts = [
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
            }
        ];
    }
}