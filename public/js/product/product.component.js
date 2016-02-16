System.register(['angular2/core', 'angular2/common', '../wish-list/wish-list.model'], function(exports_1) {
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
    var core_1, common_1, wish_list_model_1;
    var Product, ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (wish_list_model_1_1) {
                wish_list_model_1 = wish_list_model_1_1;
            }],
        execute: function() {
            // Product
            Product = (function () {
                function Product() {
                }
                return Product;
            })();
            exports_1("Product", Product);
            ProductComponent = (function () {
                function ProductComponent(wishList) {
                    this.wishList = wishList;
                }
                ProductComponent.prototype.addProduct = function (product) {
                    this.wishList.addWishedProduct(product);
                    this.toogleProductAdded(product);
                };
                ProductComponent.prototype.removeProduct = function (product) {
                    this.wishList.removeWishedProduct(product);
                    this.toogleProductAdded(product);
                };
                ProductComponent.prototype.toogleProductAdded = function (product) {
                    product.isAdded = !product.isAdded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Product)
                ], ProductComponent.prototype, "product");
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'product',
                        templateUrl: 'js/product/product.html',
                        styleUrls: ['js/product/product.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [wish_list_model_1.WishList])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map