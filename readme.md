# donejs-number-input

[![Build Status](https://travis-ci.org/donejs/donejs-number-input.png?branch=master)](https://travis-ci.org/donejs/donejs-number-input)

A number input field for DoneJS using Bootstrap

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'donejs-number-input';
```

### CommonJS use

Use `require` to load `donejs-number-input` and everything else
needed to create a template that uses `donejs-number-input`:

```js
var plugin = require("donejs-number-input");
```

## AMD use

Configure the `can` and `jquery` paths and the `donejs-number-input` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'donejs-number-input',
		    	location: 'node_modules/donejs-number-input/dist/amd',
		    	main: 'lib/donejs-number-input'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/donejs-number-input/dist/global/donejs-number-input.js'></script>
```
