const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: ["src/**/*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
          dest: "."
        }],
        options: {
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/**/*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["js/src/**/*.ts", "src/**/*.ts"],
        tasks: ["ts", "tslint"]
      }
    },
    webpack: {
       options: {
          stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
       },
       prod: webpackConfig,
       dev: Object.assign({ watch: true }, webpackConfig)
    }

  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask("default", [
    "ts",
    "tslint"
  ]);


};