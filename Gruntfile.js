/*
 * grunt-cdn-template
 * https://github.com/xio4/grunt_cdn_template
 *
 * Copyright (c) 2014 Shalkov Petr
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

	clean: {
		files: ["tmp"]

	},
    // Before generating any new files, remove any previously-created files.
    // Configuration to be run (and then tested).
    cdntemplate: {
		test1: {
		files: {
			src: ["tmp/*.html"]
		},
		templates: [
			{
				match: "angular.js",
				tpl: "//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"
			},
			{
				match: "bootstrap.css",
				tpl: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
			},
			{
				match: "nothing_esle",
				tpl: "nothing_appear"
			}
		]
		}
    },

    // Unit tests.
    nodeunit: {
      tests: ["test/*_test.js"]
    }

  });

  // Actually load this plugin"s task(s).
  grunt.loadTasks("tasks");

  // Setup a test helper to create some folders to clean.
  grunt.registerTask("copy", "Copy original files to a temp location.", function() {
    grunt.file.copy("test/original/test1.html", "tmp/test1.html");
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin"s task(s), then test the result.
  grunt.registerTask("test", ["clean", "copy", "cdntemplate", "nodeunit"]);

  // By default, lint and run all tests.
  grunt.registerTask("default", ["jshint", "test"]);

};
