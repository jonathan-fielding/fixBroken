module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                files: {
                    'dist/fixBroken.min.js': 'src/fixBroken.js'
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'development',
                    httpGeneratedImagesPath: 'images'
                }
            },
            live: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    environment: 'production',
                    httpGeneratedImagesPath: 'images'
                }
            }
        },

        watch: {
            jshint: {
                files: ['scripts/main.js'],
                tasks: ['jshint']
            },
            compass: {
                files: ['sass/{,*/}*{,*/}*{,*/}*.{scss,sass}'],
                tasks: ['compass:dev', 'notify:compass'],
                options: {
                    livereload: true,
                }
            }
        },

        jshint: {
            all: ['scripts/main.js']
        },

        notify: {
            compass: {
              options: {
                message: 'Compass compiled', //required
              }
            }
        }


    });


    // Required task(s)
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-notify');

    // Default task(s)
    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('live', ['jshint', 'uglify', 'compass:live']);
};