/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../node_modules/rxjs/Subject.d.ts"/>
/// <reference path="../node_modules/rxjs/Observer.d.ts"/>
/// <reference path="../node_modules/rxjs/operator/toPromise.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/core', './products-list/products-list.component', './wish-list/wish-list.component', './categories-menu/categories-menu.component', './wish-list/wish-list.model', './products-list/product-list.model', './categories-menu/categories-menu.event-emitter.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, products_list_component_1, wish_list_component_1, categories_menu_component_1, wish_list_model_1, product_list_model_1, categories_menu_event_emitter_service_1;
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
            },
            function (categories_menu_event_emitter_service_1_1) {
                categories_menu_event_emitter_service_1 = categories_menu_event_emitter_service_1_1;
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
            }());
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent, [
                core_1.provide(wish_list_model_1.WishList, { useClass: wish_list_model_1.WishList }),
                core_1.provide(product_list_model_1.ProductList, { useClass: product_list_model_1.ProductList }),
                core_1.provide(categories_menu_event_emitter_service_1.CategorySelectedService, { useClass: categories_menu_event_emitter_service_1.CategorySelectedService })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map