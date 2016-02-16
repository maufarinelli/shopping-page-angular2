/// <reference path="../../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../../node_modules/rxjs/Subject.d.ts"/>
/// <reference path="../../node_modules/rxjs/Observer.d.ts"/>
/// <reference path="../../node_modules/rxjs/observable/fromPromise.d.ts"/>
/// <reference path="../../node_modules/rxjs/operator/toPromise.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/core', './products-list/products-list.component', './wish-list/wish-list.component', './categories-menu/categories-menu.component', './wish-list/wish-list.model', './products-list/product-list.model'], function(exports_1) {
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
    var browser_1, core_1, products_list_component_1, wish_list_component_1, categories_menu_component_1, wish_list_model_1, product_list_model_1;
    var MainComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_list_component_1_1) {
                products_list_component_1 = products_list_component_1_1;
            },
            function (wish_list_component_1_1) {
                wish_list_component_1 = wish_list_component_1_1;
            },
            function (categories_menu_component_1_1) {
                categories_menu_component_1 = categories_menu_component_1_1;
            },
            function (wish_list_model_1_1) {
                wish_list_model_1 = wish_list_model_1_1;
            },
            function (product_list_model_1_1) {
                product_list_model_1 = product_list_model_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-component',
                        templateUrl: 'js/app.html',
                        directives: [wish_list_component_1.WishListComponent, products_list_component_1.ProductsListComponent, categories_menu_component_1.CategoryMenuComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent, [
                core_1.provide(wish_list_model_1.WishList, { useClass: wish_list_model_1.WishList }),
                core_1.provide(product_list_model_1.ProductList, { useClass: product_list_model_1.ProductList })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map