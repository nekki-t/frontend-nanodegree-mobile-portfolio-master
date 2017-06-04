module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      min: {
        src: ['css/style.css', 'css/print.css'],
        dest: 'css/style.min.css'
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: 320,
            height: 240
          }, {
            name: 'medium',
            width: 640
          },{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }]
        },

        /*
         You don't need to change this part if you don't change
         the directory structure.
         */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'image_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'image_src/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['cssmin', 'clean', 'mkdir', 'copy', 'responsive_images']);

};
