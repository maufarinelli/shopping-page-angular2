import {Injectable} from 'angular2/angular2';
import {Product} from '../product/product.component';

@Injectable()
export class ProductList {
    public productList: Product[];

}