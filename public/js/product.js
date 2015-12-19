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
// Products
var Product = (function () {
    function Product() {
    }
    return Product;
})();
var productsList = [
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
var ProductComponent = (function () {
    function ProductComponent() {
        this.products = productsList;
    }
    ProductComponent.prototype.onSelect = function () { };
    ;
    ProductComponent.prototype.getSelectedClass = function () { };
    ;
    ProductComponent = __decorate([
        angular2_1.Component({
            selector: 'product',
            template: "\n        <h1>Todos os produtos</h1>\n        <ul class=\"products-list\">\n          <li *ng-for=\"#product of products\"\n            (click)=\"onSelect(product)\"\n            [ng-class]=\"getSelectedClass(product)\">\n            <a class=\"product-wrapper\">\n                <h3>{{product.title}}</h3>\n                <img src=\"{{product.img}}\">\n                <p>{{product.price}}</p>\n            </a>\n          </li>\n        </ul>\n        ",
            styles: ["\n        .products-list {list-style-type: none}\n        .products-list li {display: inline-block; margin-right: 10px}\n        .products-list a {color: #000;}\n    "],
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
})();
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.js.map