//build.js: Configuration file for optimizing the xSelectLines Method. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"jquery": "empty:"
    },
    bundles: {
	"lib/validate.min": [ "validate" ]
    },
    shim: {
	"underscore": {
		deps: [ "jquery" ],
		exports: "_"
	},
	"validate": {
		deps: [ "underscore" ],
		exports: "validate"
	}
    },
    exclude: [ "underscore", "jquery", "validate" ],
    name: "xSelectLines",
    out: "xSelectLines.min.js"
})
