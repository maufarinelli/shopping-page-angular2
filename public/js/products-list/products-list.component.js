var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var product_component_1 = require('../product/product.component');
var productsList = [
    {
        id: 100,
        categoryName: 'Carrinhos de bebe',
        categoryId: 1,
        title: 'Carrinho de Bebe',
        img: 'http://placehold.it/200x140',
        price: '199,90',
        isAdded: false
    },
    {
        id: 101,
        categoryName: 'Mamadeiras e accessorios',
        categoryId: 2,
        title: 'Mamadeira  para Bebe',
        img: 'http://placehold.it/200x140',
        price: '29,90',
        isAdded: false
    },
    {
        id: 102,
        categoryName: 'Fraldas',
        categoryId: 2,
        title: 'Fralda Pampers - Pacote',
        img: 'http://placehold.it/200x140',
        price: '49,90',
        isAdded: false
    }
];
var ProductsListComponent = (function () {
    function ProductsListComponent() {
        this.products = productsList;
    }
    ProductsListComponent.prototype.onSelect = function () { };
    ;
    ProductsListComponent.prototype.getSelectedClass = function () { };
    ;
    ProductsListComponent = __decorate([
        angular2_1.Component({
            selector: 'products-list',
            templateUrl: 'js/products-list/products-list.html',
            styleUrls: ['js/products-list/products-list.css'],
            directives: [angular2_1.CORE_DIRECTIVES, product_component_1.ProductComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsListComponent);
    return ProductsListComponent;
})();
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map