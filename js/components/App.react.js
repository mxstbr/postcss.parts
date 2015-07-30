var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var PluginListItem = require('./pluginListItem.react');
var timeout;

var App = React.createClass({
	getInitialState: function() {
		return AppStore.getData();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var pluginList = [];
		var plugins = this.state;

		for (var category in plugins) {
			var currentCategory = plugins[category];
			for (var i = 0; i < currentCategory.length; i++) {
				pluginList.push(<PluginListItem key={"list-item-" + currentCategory[i].name}
												name={currentCategory[i].name}
												description={currentCategory[i].description}
												url={currentCategory[i].url} />);
			}
		}

		return(
			<div>
				<section className="header">
					<a href="https://twitter.com/mxstbr" className="header__logo" >
						<img src="/img/mxstbr_logo.svg" />
					</a>
					<a href="https://github.com/mxstbr/postcss.parts" className="header__add">Add a plugin</a>
					<h1 className="header__title">PostCSS.parts</h1>
					<h2 className="header__subtitle">A searchable catalog of PostCSS plugins</h2>
				</section>
				<section className="plugin__list">
					<h2 className="visually-hidden">Plugin List</h2>
					<div className="plugin__search">
						<input className="plugin__search-field" type="search" placeholder="Search" autoFocus={true} onChange={this._search} />
					</div>
					{pluginList}
				</section>
			</div>
		);
	},
	_search: function(evt) {
		var text = evt.target.value;
		AppActions.search(text);
	},
	// If the data changes, get the new data and rerender if something changed
	_onChange: function() {
	    this.setState(AppStore.getData());
	}
});

module.exports = App;