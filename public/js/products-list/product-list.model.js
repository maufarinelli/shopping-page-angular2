System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var productsList, ProductList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Mocked data
            productsList = [
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
            ProductList = (function () {
                function ProductList() {
                    this.productList = productsList;
                }
                ProductList.prototype.getProductList = function () {
                    return this.productList;
                };
                ProductList = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProductList);
                return ProductList;
            })();
            exports_1("ProductList", ProductList);
        }
    }
});
//# sourceMappingURL=product-list.model.js.map