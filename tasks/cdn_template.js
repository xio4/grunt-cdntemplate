/*
 * grunt-cdn-template
 * https://github.com/xio4/grunt_cdn_template
 *
 * Copyright (c) 2014 Shalkov Petr
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
	var PLUGIN_NAME = "cdntemplate";
	var regExStr = "<%=\\s*TEMPLATE\\s*%>";
	function cdnTemplate(fileSrc, templates) {
		if (!(grunt.file.exists(fileSrc) && grunt.file.isFile(fileSrc))) {
			return false;
		}

		grunt.log.writeln("Substitution in the file " + fileSrc);
		var data = grunt.file.read(fileSrc);
		var len = templates.length;
		for (var it = 0 ; it < len; ++it) {
			var regEx = new RegExp(regExStr.replace("TEMPLATE", templates[it].match), "g");
			data = data.replace(regEx, templates[it].tpl);
		}
		grunt.file.delete(fileSrc);
		grunt.file.write(fileSrc, data);
		grunt.log.ok();
	}


  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask(PLUGIN_NAME ,"The grunt plugin for substitute appropriate CDN by the defined template name and the target", function() {
	// Merge task-specific and/or target-specific options with these defaults.
	var options = this.options({
	});
	// this.target this.data

	var templates = this.data.templates;
	if (typeof templates === "undefined") {
		grunt.log.error();
		grunt.fail.warn("Error in setup plugin");
	}
	this.files.forEach(function(f) {
		var fileName = f.src;
		if (typeof fileName !== "string") {
			cdnTemplate(fileName[0],templates);
		}
		else {
			cdnTemplate(fileName,templates);
		}
	});
  });

};
