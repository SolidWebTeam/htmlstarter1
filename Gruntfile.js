module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            lib: {
                files: {
                    'assets/dist/js/<%= pkg.name %>.lib.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'assets/src/js/modernizr-custom.js',
                        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                        'bower_components/owl.carousel/dist/owl.carousel.js'
                    ]
                }
            }
        },
        sass: {
            lib: {
                files: {
                    'assets/src/css/bootstrap.css': 'assets/scss/bootstrap.scss'
                }
            },
            site: {
                files: {
                    'assets/dist/css/<%= pkg.name %>.css': 'assets/scss/main.scss'
                }
            }
        },
        cssmin: {
            lib: {
                files: {
                    'assets/dist/css/<%= pkg.name %>.lib.css': [
                        'assets/src/css/bootstrap.css',
                        'bower_components/owl.carousel/dist/assets/owl.carousel.css',
                        'bower_components/font-awesome/css/font-awesome.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['']);

    grunt.registerTask('lib-css', ['sass:lib', 'cssmin:lib']);
    grunt.registerTask('lib-js', ['uglify:lib']);

    grunt.registerTask('site-css', ['sass:site']);

};