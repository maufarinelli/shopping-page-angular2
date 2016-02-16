System.register(['angular2/core', 'angular2/common'], function(exports_1) {
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
    var core_1, common_1, core_2;
    var categoryMenu, categoriesMenuList, CategoryMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            categoryMenu = (function () {
                function categoryMenu() {
                }
                return categoryMenu;
            })();
            exports_1("categoryMenu", categoryMenu);
            categoriesMenuList = [
                { categoryId: 1, categoryName: 'Carrinhos de bebe' },
                { categoryId: 2, categoryName: 'Mamadeiras e accessorios' },
                { categoryId: 3, categoryName: 'Fraldas' },
            ];
            CategoryMenuComponent = (function () {
                function CategoryMenuComponent() {
                    this.onCategorySelected = new core_2.EventEmitter();
                    this.menuList = categoriesMenuList;
                }
                CategoryMenuComponent.prototype.onSelect = function (category) {
                    this.categorySelected = category.categoryId;
                    console.log(this.onCategorySelected);
                    //this.onCategorySelected.emit('categorySelected', category.categoryId);
                };
                CategoryMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'categories-menu',
                        outputs: ['onCategorySelected'],
                        templateUrl: 'js/categories-menu/categories-menu.html',
                        styleUrls: ['js/categories-menu/categories-menu.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CategoryMenuComponent);
                return CategoryMenuComponent;
            })();
            exports_1("CategoryMenuComponent", CategoryMenuComponent);
        }
    }
});
//# sourceMappingURL=categories-menu.component.js.map