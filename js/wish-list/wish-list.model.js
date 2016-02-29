System.register(['angular2/core'], function(exports_1, context_1) {
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
            }());
            exports_1("WishList", WishList);
        }
    }
});
//# sourceMappingURL=wish-list.model.js.map