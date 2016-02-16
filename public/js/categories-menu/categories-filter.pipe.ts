import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'categoriesFilter'
})
export class CategoriesFilterPipe implements PipeTransform {
    transform(value, args) {
        return value.filter((item)=> item.categoryId === args[0]);
    }
}