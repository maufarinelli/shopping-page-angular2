System.register(['angular2/core', 'angular2/common', './wish-list.model', '../product/product.component'], function(exports_1) {
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
            })();
            exports_1("WishListComponent", WishListComponent);
        }
    }
});
//# sourceMappingURL=wish-list.component.js.map