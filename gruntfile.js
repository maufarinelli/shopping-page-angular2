module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less",
                    "public/js/wish-list/wish-lis.css": "public/js/wish-list/wish-lis.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less",
                    "public/js/wish-list/wish-lis.css": "public/js/wish-list/wish-lis.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
}