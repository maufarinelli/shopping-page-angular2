import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'categoriesFilter'
})
export class CategoriesFilterPipe implements PipeTransform {
    transform(value, args) {
        console.log(value);
        return value.filter((item)=> item);
    }
}