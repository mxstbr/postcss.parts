var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');

var _fullPlugins = {
	"Packs": [
		{
			"url": "https://github.com/morishitter/atcss",
			"name": "atcss",
			"description": "Plugin pack that transforms your CSS according to special annotation comments."
		}, {
			"url": "https://github.com/ben-eb/cssnano",
			"name": "cssnano",
			"description": "Plugin pack that optimizes CSS size for use in production."
		}, {
			"url": "https://github.com/cssnext/cssnext/",
			"name": "cssnext",
			"description": "Plugin pack that allows you to use future CSS features today."
		}, {
			"url": "https://github.com/jonathantneal/precss",
			"name": "precss",
			"description": "Plugin pack that allows you to use Sass-like CSS."
		}, {
			"url": "https://github.com/simplaio/rucksack",
			"name": "rucksack",
			"description": "Plugin pack to speeds up CSS development with new features and shortcuts."
		}, {
			"url": "https://github.com/stylelint/stylelint",
			"name": "stylelint",
			"description": "Plugin pack that lints your stylesheets."
		}
	],
	"Future CSS Syntax": [
		{
			"url": "https://github.com/postcss/postcss-color-function",
			"name": "postcss-color-function",
			"description": "Supports functions to transform colors."
		}, {
			"url": "https://github.com/postcss/postcss-color-gray",
			"name": "postcss-color-gray",
			"description": "Supports the gray() function."
		}, {
			"url": "https://github.com/postcss/postcss-color-hex-alpha",
			"name": "postcss-color-hex-alpha",
			"description": "Supports #rrggbbaa and #rgba notation."
		}, {
			"url": "https://github.com/postcss/postcss-color-hwb",
			"name": "postcss-color-hwb",
			"description": "Transforms hwb() to widely compatible rgb()."
		}, {
			"url": "https://github.com/postcss/postcss-color-rebeccapurple",
			"name": "postcss-color-rebeccapurple",
			"description": "Supports the rebeccapurple color."
		}, {
			"url": "https://github.com/jonathantneal/postcss-conic-gradient",
			"name": "postcss-conic-gradient",
			"description": "Supports the conic-gradient background."
		}, {
			"url": "https://github.com/postcss/postcss-custom-media",
			"name": "postcss-custom-media",
			"description": "Supports custom aliases for media queries."
		}, {
			"url": "https://github.com/postcss/postcss-custom-properties",
			"name": "postcss-custom-properties",
			"description": "Supports variables, using syntax from the W3C Custom Properties."
		}, {
			"url": "https://github.com/postcss/postcss-custom-selectors",
			"name": "postcss-custom-selectors",
			"description": "Adds custom aliases for selectors."
		}, {
			"url": "https://github.com/travco/postcss-extend",
			"name": "postcss-extend",
			"description": "Supports spec-approximate @extend for rules and placeholders, recursively."
		}, {
			"url": "https://github.com/postcss/postcss-font-variant",
			"name": "postcss-font-variant",
			"description": "Transpiles human-readable font-variant to more widely supported CSS."
		}, {
			"url": "https://github.com/vitkarpov/postcss-host",
			"name": "postcss-host",
			"description": "Makes the Shadow DOM :host selector work properly with pseudo-classes."
		}, {
			"url": "https://github.com/postcss/postcss-media-minmax",
			"name": "postcss-media-minmax",
			"description": "Adds <= and => statements to media queries."
		}, {
			"url": "https://github.com/jonathantneal/postcss-pseudo-class-any-link",
			"name": "postcss-pseudo-class-any-link",
			"description": "Adds :any-link pseudo-class."
		}, {
			"url": "https://github.com/postcss/postcss-selector-not",
			"name": "postcss-selector-not",
			"description": "Transforms CSS4 :not() to CSS3 :not()"
		}, {
			"url": "https://github.com/twbs/mq4-hover-shim",
			"name": "mq4-hover-shim",
			"description": "Supports the @media(hover) feature."
		}
	],
	"Fallbacks": [
		{
			"url": "https://github.com/postcss/postcss-color-rgba-fallback",
			"name": "postcss-color-rgba-fallback",
			"description": "Transforms rgba() to hexadecimal."
		}, {
			"url": "https://github.com/Rycochet/postcss-epub",
			"name": "postcss-epub",
			"description": "Adds the -epub- prefix to relevant properties."
		}, {
			"url": "https://github.com/iamvdo/postcss-opacity",
			"name": "postcss-opacity",
			"description": "Adds opacity filter for IE8."
		}, {
			"url": "https://github.com/axa-ch/postcss-pseudoelements",
			"name": "postcss-pseudoelements",
			"description": "Convert :: selectors into : selectors for IE 8 compatibility."
		}, {
			"url": "https://github.com/iamvdo/postcss-vmin",
			"name": "postcss-vmin",
			"description": "Generates vm fallback for vmin unit in IE9."
		}, {
			"url": "https://github.com/postcss/postcss-will-change",
			"name": "postcss-will-change",
			"description": "Inserts 3D hack before will-change property."
		}, {
			"url": "https://github.com/postcss/autoprefixer",
			"name": "autoprefixer",
			"description": "Adds vendor prefixes for you, using data from Can I Use."
		}, {
			"url": "https://github.com/cssdream/cssgrace",
			"name": "cssgrace",
			"description": "Provides various helpers and transpiles CSS 3 for IE and other old browsers."
		}, {
			"url": "https://github.com/robwierzbowski/node-pixrem",
			"name": "pixrem",
			"description": "Generates pixel fallbacks for rem units."
		}
	],
	"Language Extensions": [
		{
			"url": "https://github.com/ileri/postcss-bem",
			"name": "postcss-bem",
			"description": "Adds at-rules for BEM and SUIT style classes."
		}, {
			"url": "https://github.com/andyjansson/postcss-conditionals",
			"name": "postcss-conditionals",
			"description": "Adds @if statements."
		}, {
			"url": "https://github.com/MadLittleMods/postcss-css-variables",
			"name": "postcss-css-variables",
			"description": "Supports variables for selectors, and at-rules using W3C similar syntax."
		}, {
			"url": "https://github.com/daleeidd/postcss-define-property",
			"name": "postcss-define-property",
			"description": "To define properties shortcut."
		}, {
			"url": "https://github.com/outpunk/postcss-each",
			"name": "postcss-each",
			"description": "Adds @each statement."
		}, {
			"url": "https://github.com/antyakushev/postcss-for",
			"name": "postcss-for",
			"description": "Adds @for loops."
		}, {
			"url": "https://github.com/macropodhq/postcss-local-constants",
			"name": "postcss-local-constants",
			"description": "Adds support for localized constants."
		}, {
			"url": "https://github.com/pascalduez/postcss-map",
			"name": "postcss-map",
			"description": "Enables configuration maps."
		}, {
			"url": "https://github.com/postcss/postcss-mixins",
			"name": "postcss-mixins",
			"description": "Enables mixins more powerful than Sass', defined within stylesheets or in JS."
		}, {
			"url": "https://github.com/WolfgangKluge/postcss-media-variables",
			"name": "postcss-media-variables",
			"description": "Adds support for var() and calc() in @media rules."
		}, {
			"url": "https://github.com/kristoferjoseph/postcss-modular-scale",
			"name": "postcss-modular-scale",
			"description": "Adds a modular scale ms() function."
		}, {
			"url": "https://github.com/postcss/postcss-nested",
			"name": "postcss-nested",
			"description": "Unwraps nested rules."
		}, {
			"url": "https://github.com/jedmao/postcss-nested-props",
			"name": "postcss-nested-props",
			"description": "Unwraps nested properties."
		}, {
			"url": "https://github.com/jonathantneal/postcss-pseudo-class-enter",
			"name": "postcss-pseudo-class-enter",
			"description": "Transforms :enter into :hover and :focus."
		}, {
			"url": "https://github.com/pascalduez/postcss-quantity-queries",
			"name": "postcss-quantity-queries",
			"description": "Enables quantity queries."
		}, {
			"url": "https://github.com/andyjansson/postcss-sassy-mixins",
			"name": "postcss-sassy-mixins",
			"description": "Enables mixins with Sass keywords."
		}, {
			"url": "https://github.com/davidtheclark/postcss-simple-extend",
			"name": "postcss-simple-extend",
			"description": "Lightweight extending of silent classes, like Sass' @extend."
		}, {
			"url": "https://github.com/postcss/postcss-simple-vars",
			"name": "postcss-simple-vars",
			"description": "Supports for Sass-style variables."
		}, {
			"url": "https://github.com/whitneyit/postcss-strip-units",
			"name": "postcss-strip-units",
			"description": "Strips units off of property values."
		}, {
			"url": "https://github.com/markgoodyear/postcss-vertical-rhythm",
			"name": "postcss-vertical-rhythm",
			"description": "Adds a vertical rhythm unit based on font-size and line-height."
		}, {
			"url": "https://github.com/geddski/csstyle",
			"name": "csstyle",
			"description": "Adds components workflow to your styles."
		}, {
			"url": "https://github.com/1j01/postcss-gtk",
			"name": "postcss-gtk",
			"description": "Processes GTK+ CSS into browser CSS."
		}
	],
	"Colors": [
		{
			"url": "https://github.com/postcss/postcss-brand-colors",
			"name": "postcss-brand-colors",
			"description": "Inserts company brand colors in the brand-colors module."
		}, {
			"url": "https://github.com/avanes/postcss-color-alpha",
			"name": "postcss-color-alpha",
			"description": "Transforms #hex.a, black(alpha) and white(alpha) to rgba()."
		}, {
			"url": "https://github.com/devgru/postcss-color-hcl",
			"name": "postcss-color-hcl",
			"description": "Transforms hcl(H, C, L) and hcl(H, C, L, alpha) to #rgb and #rgba."
		}, {
			"url": "https://github.com/nicksheffield/postcss-color-hexa",
			"name": "postcss-color-hexa",
			"description": "Transforms hexa(hex, alpha) into rgba() format."
		}, {
			"url": "https://github.com/iamstarkov/postcss-color-mix",
			"name": "postcss-color-mix",
			"description": "Mixes two colors together."
		}, {
			"url": "https://github.com/zaim/postcss-color-palette",
			"name": "postcss-color-palette",
			"description": "Transforms CSS 2 color keywords to a custom palette."
		}, {
			"url": "https://github.com/longdog/postcss-color-pantone",
			"name": "postcss-color-pantone",
			"description": "Transforms pantone color to RGB."
		}, {
			"url": "https://github.com/kristoferjoseph/postcss-color-scale",
			"name": "postcss-color-scale",
			"description": "Adds a color scale cs() function."
		}, {
			"url": "https://github.com/btholt/postcss-colorblind",
			"name": "postcss-colorblind",
			"description": "Transforms colors using filters to simulate colorblindness."
		}, {
			"url": "https://github.com/seaneking/postcss-hexrgba",
			"name": "postcss-hexrgba",
			"description": "Adds shorthand hex rgba(hex, alpha) method."
		}
	],
	"Images and Fonts": [
		{
			"url": "https://github.com/borodean/postcss-assets",
			"name": "postcss-assets",
			"description": "Allows you to simplify URLs, insert image dimensions, and inline files."
		}, {
			"url": "https://github.com/simonsmith/postcss-at2x",
			"name": "postcss-at2x",
			"description": "Handles retina background images via use of at-2x keyword."
		}, {
			"url": "https://github.com/Ser-Gen/postcss-data-packer",
			"name": "postcss-data-packer",
			"description": "Moves embedded Base64 data to a separate file."
		}, {
			"url": "https://github.com/alex499/postcss-image-set",
			"name": "postcss-image-set",
			"description": "Adds background-image with first image for image-set()."
		}, {
			"url": "https://github.com/jedmao/postcss-font-pack",
			"name": "postcss-font-pack",
			"description": "Simplifies font declarations and validates they match configured font packs."
		}, {
			"url": "https://github.com/seaneking/postcss-fontpath",
			"name": "postcss-fontpath",
			"description": "Adds font links for different browsers."
		}, {
			"url": "https://github.com/2createStudio/postcss-sprites",
			"name": "postcss-sprites",
			"description": "Generates CSS sprites from stylesheets."
		}, {
			"url": "https://github.com/Pavliko/postcss-svg",
			"name": "postcss-svg",
			"description": "Insert inline SVG to CSS and allows to manage it colors."
		}, {
			"url": "https://github.com/justim/postcss-svg-fallback",
			"name": "postcss-svg-fallback",
			"description": "Converts SVG in your CSS to PNG files for IE 8."
		}, {
			"url": "https://github.com/ben-eb/postcss-svgo",
			"name": "postcss-svgo",
			"description": "Processes inline SVG through SVGO."
		}, {
			"url": "https://github.com/postcss/postcss-url",
			"name": "postcss-url",
			"description": "Rebases or inlines url()s."
		}, {
			"url": "https://github.com/lexich/webpcss",
			"name": "webpcss",
			"description": "Adds URLs for WebP images for browsers that support WebP."
		}
	],
	"Grids": [
		{
			"url": "https://github.com/andyjansson/postcss-grid",
			"name": "postcss-grid",
			"description": "Adds a semantic grid system."
		}, {
			"url": "https://github.com/jo-asakura/postcss-neat",
			"name": "postcss-neat",
			"description": "A semantic and fluid grid framework."
		}, {
			"url": "https://github.com/corysimmons/lost",
			"name": "lost",
			"description": "Feature-rich calc() grid system by Jeet author."
		}
	],
	"Optimizations": [
		{
			"url": "https://github.com/postcss/postcss-calc",
			"name": "postcss-calc",
			"description": "Reduces calc() to values (when expressions involve the same units)."
		}, {
			"url": "https://github.com/postcss/postcss-import",
			"name": "postcss-import",
			"description": "Inlines the stylesheets referred to by @import rules."
		}, {
			"url": "https://github.com/hail2u/postcss-single-charset",
			"name": "postcss-single-charset",
			"description": " ensures that there is one and only one @charset rule at the top of file."
		}, {
			"url": "https://github.com/ben-eb/postcss-zindex",
			"name": "postcss-zindex",
			"description": "Rebases positive z-index values."
		}, {
			"url": "https://github.com/AoDev/css-byebye",
			"name": "css-byebye",
			"description": "Removes the CSS rules that you don't want."
		}, {
			"url": "https://github.com/hail2u/node-css-mqpacker",
			"name": "css-mqpacker",
			"description": "Joins matching CSS media queries into a single statement."
		}, {
			"url": "https://github.com/ben-eb/stylehacks",
			"name": "stylehacks",
			"description": "Removes CSS hacks based on browser support."
		}
	],
	"Shortcuts": [
		{
			"url": "https://github.com/seaneking/postcss-alias",
			"name": "postcss-alias",
			"description": "Creates shorter aliases for properties."
		}, {
			"url": "https://github.com/jedmao/postcss-all-link-colors",
			"name": "postcss-all-link-colors",
			"description": "Insert colors for link-related pseudo-classes."
		}, {
			"url": "https://github.com/andrepolischuk/postcss-border",
			"name": "postcss-border",
			"description": "Adds shorthand for width and color of all borders in border property."
		}, {
			"url": "https://github.com/jedmao/postcss-circle",
			"name": "postcss-circle",
			"description": "Inserts a circle with color."
		}, {
			"url": "https://github.com/seaneking/postcss-clearfix",
			"name": "postcss-clearfix",
			"description": "Adds fix and fix-legacy properties to the clear declaration."
		}, {
			"url": "https://github.com/johnie/postcss-crip",
			"name": "postcss-crip",
			"description": "Shorthand properties for Crips that are too lazy to write."
		}, {
			"url": "https://github.com/antyakushev/postcss-default-unit",
			"name": "postcss-default-unit",
			"description": "Adds default unit to numeric CSS properties."
		}, {
			"url": "https://github.com/postcss/postcss-easings",
			"name": "postcss-easings",
			"description": "Replaces easing names from easings.net with cubic-bezier() functions."
		}, {
			"url": "https://github.com/postcss/postcss-focus",
			"name": "postcss-focus",
			"description": "Adds :focus selector to every :hover."
		}, {
			"url": "https://github.com/simonsmith/postcss-generate-preset",
			"name": "postcss-generate-preset",
			"description": "Allows quick generation of rules. Useful for creating repetitive utilities."
		}, {
			"url": "https://github.com/seaneking/postcss-position",
			"name": "postcss-position",
			"description": "Adds shorthand declarations for position attributes."
		}, {
			"url": "https://github.com/simonsmith/postcss-property-lookup",
			"name": "postcss-property-lookup",
			"description": "Allows referencing property values without a variable."
		}, {
			"url": "https://github.com/seaneking/postcss-responsive-type",
			"name": "postcss-responsive-type",
			"description": "Changes font-size depending on screen size."
		}, {
			"url": "https://github.com/jonathantneal/postcss-short",
			"name": "postcss-short",
			"description": "Adds and extends numerous shorthand properties."
		}, {
			"url": "https://github.com/postcss/postcss-size",
			"name": "postcss-size",
			"description": "Adds a size shortcut that sets width and height with one declaration."
		}, {
			"url": "https://github.com/jonathantneal/postcss-transform-shortcut",
			"name": "postcss-transform-shortcut",
			"description": "Allows shorthand transform properties in CSS."
		}, {
			"url": "https://github.com/davidhemphill/postcss-verthorz",
			"name": "postcss-verthorz",
			"description": "Adds vertical and horizontal spacing declarations."
		}
	],
	"Others": [
		{
			"url": "https://github.com/thompsongl/postcss-class-prefix",
			"name": "postcss-class-prefix",
			"description": "Adds a prefix/namespace to class selectors."
		}, {
			"url": "https://github.com/pathsofdesign/postcss-fakeid",
			"name": "postcss-fakeid",
			"description": "Transforms #foo IDs to attribute selectors [id='foo']."
		}, {
			"url": "https://github.com/hallvors/postcss-flexboxfixer",
			"name": "postcss-flexboxfixer",
			"description": "Unprefixes -webkit- only flexbox in legacy CSS."
		}, {
			"url": "https://github.com/hallvors/postcss-gradientfixer",
			"name": "postcss-gradientfixer",
			"description": "Unprefixes -webkit- only gradients in legacy CSS."
		}, {
			"url": "https://github.com/TCotton/postcss-mq-keyframes",
			"name": "postcss-mq-keyframes",
			"description": "Moves any animation keyframes in media queries to the end of the file."
		}, {
			"url": "https://github.com/omgovich/postcss-pseudo-elements-content",
			"name": "postcss-pseudo-elements-content",
			"description": "Automatically adds content: '' to :before and :after."
		}, {
			"url": "https://github.com/cuth/postcss-pxtorem",
			"name": "postcss-pxtorem",
			"description": "Converts pixel units to rem."
		}, {
			"url": "https://github.com/morishitter/postcss-style-guide",
			"name": "postcss-style-guide",
			"description": "Generates a style guide automatically."
		}, {
			"url": "https://github.com/pazams/postcss-scopify",
			"name": "postcss-scopify",
			"description": "Adds a user input scope to each selector."
		}, {
			"url": "https://github.com/ben-eb/perfectionist",
			"name": "perfectionist",
			"description": "Formats poorly written CSS and renders a 'pretty' result."
		}, {
			"url": "https://github.com/MohammadYounes/rtlcss",
			"name": "rtlcss",
			"description": "Mirrors styles for right-to-left locales."
		}
	],
	"Analysis": [
		{
			"url": "https://github.com/necolas/postcss-bem-linter",
			"name": "postcss-bem-linter",
			"description": "Lints CSS for conformance to SUIT CSS methodology."
		}, {
			"url": "https://github.com/cssstats/postcss-cssstats",
			"name": "postcss-cssstats",
			"description": "Returns an object with CSS statistics."
		}, {
			"url": "https://github.com/vovanbo/css2modernizr",
			"name": "css2modernizr",
			"description": "Creates a Modernizr config file that requires only the tests that your CSS uses."
		}, {
			"url": "https://github.com/anandthakker/doiuse",
			"name": "doiuse",
			"description": "Lints CSS for browser support, using data from Can I Use."
		}, {
			"url": "https://github.com/johnotander/immutable-css",
			"name": "immutable-css",
			"description": "Lints CSS for class mutations."
		}, {
			"url": "https://github.com/davidtheclark/list-selectors",
			"name": "list-selectors",
			"description": "Lists and categorizes the selectors used in your CSS, for code review."
		}
	],
	"Reporters": [
		{
			"url": "https://github.com/postcss/postcss-browser-reporter",
			"name": "postcss-browser-reporter",
			"description": "Displays warning messages from other plugins right in your browser."
		}, {
			"url": "https://github.com/postcss/postcss-reporter",
			"name": "postcss-reporter",
			"description": "Logs warnings and other messages from other plugins in the console."
		}
	],
	"Fun": [
		{
			"url": "https://github.com/dp-lewis/postcss-australian-stylesheets",
			"name": "postcss-australian-stylesheets",
			"description": "Australian Style Sheets."
		}, {
			"url": "https://github.com/chancancode/postcss-canadian-stylesheets",
			"name": "postcss-canadian-stylesheets",
			"description": "Canadian Style Sheets."
		}, {
			"url": "https://github.com/markgoodyear/postcss-pointer",
			"name": "postcss-pointer",
			"description": "Replaces pointer: cursor with cursor: pointer."
		}, {
			"url": "https://github.com/HashanP/postcss-spiffing",
			"name": "postcss-spiffing",
			"description": "Lets you use British English in your CSS."
		}
	]
}

var _currentPlugins = _fullPlugins;

var AppStore = assign({}, EventEmitter.prototype, {
	getData: function() {
		return _currentPlugins;
	},
	_search: function(text) {
		_currentPlugins = {};
		for (var category in _fullPlugins) {
			var currentCategory = _fullPlugins[category];
			_currentPlugins[category] = [];
			for (var i = 0; i < currentCategory.length; i++) {
				if (currentCategory[i].name.toLowerCase().indexOf(text.toLowerCase()) > -1 || currentCategory[i].description.toLowerCase().indexOf(text.toLowerCase()) > -1) {
					_currentPlugins[category].push(currentCategory[i]);
				}
			}
		}
	},
	emitChange: function() {
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case AppConstants.SEARCH:
			AppStore._search(action.text);
			break;
		default:
			return false;
	}
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
