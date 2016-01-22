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
var wish_list_model_1 = require('./wish-list.model');
var product_component_1 = require('../product/product.component');
var WishListComponent = (function () {
    function WishListComponent(wishList) {
        this.wishList = wishList;
    }
    WishListComponent = __decorate([
        angular2_1.Component({
            selector: 'wish-list',
            templateUrl: 'js/wish-list/wish-list.html',
            styleUrls: ['js/wish-list/wish-list.css'],
            directives: [angular2_1.CORE_DIRECTIVES, product_component_1.ProductComponent],
            providers: [angular2_1.provide(wish_list_model_1.WishList, { useClass: wish_list_model_1.WishList })]
        }), 
        __metadata('design:paramtypes', [wish_list_model_1.WishList])
    ], WishListComponent);
    return WishListComponent;
})();
exports.WishListComponent = WishListComponent;
//# sourceMappingURL=wish-list.component.js.map