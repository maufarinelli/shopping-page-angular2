module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "styles/style.css": "styles/style.less",
                    "js/product/product.css": "js/product/product.less",
                    "js/products-list/products-list.css": "js/products-list/products-list.less",
                    "js/wish-list/wish-list.css": "js/wish-list/wish-list.less",
                    "js/categories-menu/categories-menu.css": "js/categories-menu/categories-menu.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "styles/style.css": "styles/style.less",
                    "js/product/product.css": "js/product/product.less",
                    "js/products-list/products-list.css": "js/products-list/products-list.less",
                    "js/wish-list/wish-list.css": "js/wish-list/wish-list.less",
                    "js/categories-menu/categories-menu.css": "js/categories-menu/categories-menu.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
}