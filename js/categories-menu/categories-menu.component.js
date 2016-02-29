System.register(['angular2/core', 'angular2/common', './categories-menu.event-emitter.service'], function(exports_1, context_1) {
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
    var core_1, common_1, categories_menu_event_emitter_service_1;
    var categoryMenu, categoriesMenuList, CategoryMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (categories_menu_event_emitter_service_1_1) {
                categories_menu_event_emitter_service_1 = categories_menu_event_emitter_service_1_1;
            }],
        execute: function() {
            categoryMenu = (function () {
                function categoryMenu() {
                }
                return categoryMenu;
            }());
            exports_1("categoryMenu", categoryMenu);
            categoriesMenuList = [
                { categoryId: 0, categoryName: 'All Products' },
                { categoryId: 1, categoryName: 'Baby Strollers' },
                { categoryId: 2, categoryName: 'Bottles & accessories' },
                { categoryId: 3, categoryName: 'Diapers' },
            ];
            CategoryMenuComponent = (function () {
                function CategoryMenuComponent(categorySelectedService) {
                    this.menuList = categoriesMenuList;
                    this.categorySelected = categorySelectedService;
                }
                CategoryMenuComponent.prototype.onSelect = function (category) {
                    this.categorySelected.onCategorySelected(category.categoryId);
                };
                CategoryMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'categories-menu',
                        templateUrl: 'js/categories-menu/categories-menu.html',
                        styleUrls: ['js/categories-menu/categories-menu.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [categories_menu_event_emitter_service_1.CategorySelectedService])
                ], CategoryMenuComponent);
                return CategoryMenuComponent;
            }());
            exports_1("CategoryMenuComponent", CategoryMenuComponent);
        }
    }
});
//# sourceMappingURL=categories-menu.component.js.map