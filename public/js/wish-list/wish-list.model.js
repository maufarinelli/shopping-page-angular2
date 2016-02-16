System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var WishList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WishList = (function () {
                function WishList() {
                    this.wishedProducts = [];
                }
                WishList.prototype.getWishedProducts = function () {
                    return this.wishedProducts;
                };
                WishList.prototype.setWishedProducts = function (products) {
                    this.wishedProducts = products;
                };
                WishList.prototype.addWishedProduct = function (product) {
                    this.wishedProducts.push(product);
                };
                WishList.prototype.removeWishedProduct = function (product) {
                    var index = 0;
                    this.wishedProducts.forEach(function (element, i) {
                        if (element.id === product.id) {
                            index = i;
                        }
                    });
                    this.wishedProducts.splice(index, 1);
                };
                WishList = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WishList);
                return WishList;
            })();
            exports_1("WishList", WishList);
        }
    }
});
//# sourceMappingURL=wish-list.model.js.map