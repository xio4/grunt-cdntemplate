# grunt-cdntemplate

> The grunt plugin for substitute appropriate CDN by the defined template name and the target

## Getting Started
This plugin requires Grunt `~0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cdntemplate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cdntemplate');
```

## The "cdntemplate" task

### Overview
In your project's Gruntfile, add a section named `cdntemplate` to the data object passed into `grunt.initConfig()`.

Consider we have grunt config:
```js
grunt.initConfig({
   cdntemplate: {
      yourtarget: {
         files: {
            // *.html or other files.
         },
			cdn:[
				"//ajax.googleapis.com/ajax/lib",
				"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0"
			],
         templates: [
            { match: "angular.js",
               tpl: "<%=cdntemplate.yourtarget.cdn[0]%>/angularjs/1.3.1/angular.min.js"
            },
				{	match: "bootstrap.css",
					tpl: "<%= cdntemplate.yourtarget.cdn[1]%>/css/bootstrap.min.css"
				},
         ],
      }
  }
});
```
And part of *.html file:
```html
...
<link href='<%= bootstrap.css%>' rel='stylesheet' type='text/css'>
<script src="<%= angular.js%>"></script>
...
```
After replace it will be:
```html
<link href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
<script src="//ajax.googleapis.com/ajax/lib/angularjs/1.3.1/angular.min.js"></script>

```

## Release History
 *2014-11-03	V0.1.1	Change usage config	
 *2014-11-02	v0.1.0	First version
