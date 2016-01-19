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
var wish_list_model_1 = require('../wish-list/wish-list.model');
// Product
var Product = (function () {
    function Product() {
    }
    return Product;
})();
exports.Product = Product;
var ProductComponent = (function () {
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
        angular2_1.Input(), 
        __metadata('design:type', Product)
    ], ProductComponent.prototype, "product");
    ProductComponent = __decorate([
        angular2_1.Component({
            selector: 'product',
            templateUrl: 'js/product/product.html',
            styleUrls: ['js/product/product.css'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [wish_list_model_1.WishList])
    ], ProductComponent);
    return ProductComponent;
})();
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map