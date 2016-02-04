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
var product_list_model_1 = require('./products-list/product-list.model');
var categoryMenu = (function () {
    function categoryMenu() {
    }
    return categoryMenu;
})();
exports.categoryMenu = categoryMenu;
var categoriesMenuList = [
    { categoryId: 1, categoryName: 'Carrinhos de bebe' },
    { categoryId: 2, categoryName: 'Mamadeiras e accessorios' },
    { categoryId: 3, categoryName: 'Fraldas' },
];
var CategoryMenuComponent = (function () {
    function CategoryMenuComponent(productsList) {
        this.menuList = categoriesMenuList;
        this.productList = productsList.getProductList();
    }
    CategoryMenuComponent.prototype.onSelect = function (category) {
        this.categorySelected = category.categoryId;
        this.productList.filterProductList(this.categorySelected);
    };
    CategoryMenuComponent = __decorate([
        angular2_1.Component({
            selector: 'categories-menu',
            templateUrl: 'js/categories-menu/categories-menu.html',
            styleUrls: ['js/categories-menu/categories-menu.css'],
            directives: [angular2_1.CORE_DIRECTIVES, product_list_model_1.ProductList]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof product_list_model_1.ProductList !== 'undefined' && product_list_model_1.ProductList) === 'function' && _a) || Object])
    ], CategoryMenuComponent);
    return CategoryMenuComponent;
    var _a;
})();
exports.CategoryMenuComponent = CategoryMenuComponent;
//# sourceMappingURL=categories-menu.component.js.map