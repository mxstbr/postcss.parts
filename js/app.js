window.React = require('react');
var App = require('./components/App.react');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

React.render(
	<App />,
	document.getElementById('app')
);
