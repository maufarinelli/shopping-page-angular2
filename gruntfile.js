module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "public/styles/style.css": "public/styles/style.less",
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less",
                    "public/js/wish-list/wish-list.css": "public/js/wish-list/wish-list.less",
                    "public/js/categories-menu/categories-menu.css": "public/js/categories-menu/categories-menu.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "public/styles/style.css": "public/styles/style.less",
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less",
                    "public/js/wish-list/wish-list.css": "public/js/wish-list/wish-list.less",
                    "public/js/categories-menu/categories-menu.css": "public/js/categories-menu/categories-menu.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
}