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
var CategoriesFilterPipe = (function () {
    function CategoriesFilterPipe() {
    }
    CategoriesFilterPipe.prototype.transform = function (value, args) {
        return value.filter(function (item) { return item.categoryId === args[0]; });
    };
    CategoriesFilterPipe = __decorate([
        angular2_1.Pipe({
            name: 'categoriesFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesFilterPipe);
    return CategoriesFilterPipe;
})();
exports.CategoriesFilterPipe = CategoriesFilterPipe;
//# sourceMappingURL=categories-filter.pipe.js.map