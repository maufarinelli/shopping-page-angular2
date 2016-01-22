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
var products_list_component_1 = require('./products-list/products-list.component');
var wish_list_component_1 = require('./wish-list/wish-list.component');
var categories_menu_component_1 = require('./categories-menu/categories-menu.component');
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'main-component',
            templateUrl: 'js/app.html',
            directives: [wish_list_component_1.WishListComponent, products_list_component_1.ProductsListComponent, categories_menu_component_1.CategoryMenuComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
exports.MainComponent = MainComponent;
angular2_1.bootstrap(MainComponent);
//# sourceMappingURL=app.js.map