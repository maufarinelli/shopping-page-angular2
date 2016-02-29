import {Injectable, EventEmitter, Output} from 'angular2/core';

@Injectable()
export class CategorySelectedService {
    @Output()
    public categorySelected: EventEmitter<string>;

    constructor(){
        this.categorySelected = new EventEmitter();
    }

    public onCategorySelected(str: string){
        this.categorySelected.emit(str);
    }
}