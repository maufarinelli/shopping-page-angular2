System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'angular2/common', './product-list.model', '../product/product.component', '../categories-menu/categories-menu.event-emitter.service', 'lodash'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, product_list_model_1, product_component_1, categories_menu_event_emitter_service_1, _, core_2;
    var ProductsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (product_list_model_1_1) {
                product_list_model_1 = product_list_model_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (categories_menu_event_emitter_service_1_1) {
                categories_menu_event_emitter_service_1 = categories_menu_event_emitter_service_1_1;
            },
            function (_4) {
                _ = _4;
            }],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent(productsList, categorySelectedService) {
                    var _this = this;
                    this.init(productsList);
                    this.zone = new core_2.NgZone({ enableLongStackTrace: false });
                    this.categorySelected = categorySelectedService;
                    this.categorySelected.categorySelected.subscribe(function (data) { return _this.filterProductsByCategory(data); });
                }
                ProductsListComponent.prototype.init = function (productsList) {
                    var _this = this;
                    productsList.getHttpProductList().subscribe(function (products) {
                        _this.allProducts = products;
                        _this.zone.run(function () {
                            _this.products = _this.allProducts;
                        });
                    }, function (error) { return _this.errorMessage = error; });
                };
                ProductsListComponent.prototype.filterProductsByCategory = function (id) {
                    if (id > 0) {
                        this.products = _.filter(this.allProducts, { categoryId: id });
                    }
                    else {
                        this.products = this.allProducts;
                    }
                };
                ProductsListComponent = __decorate([
                    core_1.Component({
                        selector: 'products-list',
                        templateUrl: 'js/products-list/products-list.html',
                        styleUrls: ['js/products-list/products-list.css'],
                        directives: [common_1.CORE_DIRECTIVES, product_component_1.ProductComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [product_list_model_1.ProductList, categories_menu_event_emitter_service_1.CategorySelectedService])
                ], ProductsListComponent);
                return ProductsListComponent;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=products-list.component.js.map