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

```js
grunt.initConfig({
   cdntemplate: {
      yourtarget: {
         files: {
            // *.html or other files.
         },
         templates: [
            { match: "match string",
               tpl: "substitution string"
            },
				...
         ],
      }
  }
});
```

Consider *.html file:
```html
<link href='<%= match string %>' rel='stylesheet' type='text/css'>
```
After replace it will be:
```html
<link href='<%= substitution string %>' rel='stylesheet' type='text/css'>
```

## Release History
0.1.0
	First version
