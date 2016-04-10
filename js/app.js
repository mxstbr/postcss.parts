window.React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.react');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);