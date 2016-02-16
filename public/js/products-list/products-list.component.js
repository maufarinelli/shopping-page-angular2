System.register(['angular2/core', 'angular2/common', './product-list.model', '../product/product.component'], function(exports_1) {
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
    var core_1, common_1, product_list_model_1, product_component_1;
    var ProductsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (product_list_model_1_1) {
                product_list_model_1 = product_list_model_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            }],
        execute: function() {
            ProductsListComponent = (function () {
                function ProductsListComponent(productsList) {
                    this.products = productsList.getProductList();
                }
                ProductsListComponent = __decorate([
                    core_1.Component({
                        selector: 'products-list',
                        templateUrl: 'js/products-list/products-list.html',
                        styleUrls: ['js/products-list/products-list.css'],
                        directives: [common_1.CORE_DIRECTIVES, product_component_1.ProductComponent]
                    }), 
                    __metadata('design:paramtypes', [product_list_model_1.ProductList])
                ], ProductsListComponent);
                return ProductsListComponent;
            })();
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=products-list.component.js.map