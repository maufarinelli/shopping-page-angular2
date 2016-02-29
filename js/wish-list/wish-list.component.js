System.register(['angular2/core', 'angular2/common', './wish-list.model', '../product/product.component'], function(exports_1, context_1) {
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
    var core_1, common_1, wish_list_model_1, product_component_1;
    var WishListComponent;
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
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            }],
        execute: function() {
            WishListComponent = (function () {
                function WishListComponent(wishList) {
                    this.wishList = wishList;
                }
                WishListComponent = __decorate([
                    core_1.Component({
                        selector: 'wish-list',
                        templateUrl: 'js/wish-list/wish-list.html',
                        styleUrls: ['js/wish-list/wish-list.css'],
                        directives: [common_1.CORE_DIRECTIVES, product_component_1.ProductComponent]
                    }), 
                    __metadata('design:paramtypes', [wish_list_model_1.WishList])
                ], WishListComponent);
                return WishListComponent;
            }());
            exports_1("WishListComponent", WishListComponent);
        }
    }
});
//# sourceMappingURL=wish-list.component.js.map