module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    //"public/styles/style.css" :"public/styles/style.less",
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    //"public/styles/style.css" :"public/styles/style.less",
                    "public/js/product/product.css": "public/js/product/product.less",
                    "public/js/products-list/products-list.css": "public/js/products-list/products-list.less"
                }
            }
        },
        watch: {
            files: ['public/**/product.less'],
            tasks: ['less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
}