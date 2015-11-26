var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var PluginListItem = require('./pluginListItem.react');


var App = React.createClass({
	getInitialState: function() {
		return AppStore.getData();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
		AppActions.getUpdatedList();
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var pluginList = [];
		var plugins = this.state.plugins;
		console.log(this.state);

		if (plugins.length === 0 && this.state.pluginsLoaded === false) {
			pluginList.push(<PluginListItem key={"list-item-loader"}
											spinner={true} />
			);
		} else {
			plugins.forEach(function(plugin){
				pluginList.push(<PluginListItem key={"list-item-" + plugin.name}
													name={plugin.name.replace("postcss-", "")}
													description={plugin.description}
													url={plugin.url} />);
			});
		}

		return(
			<div>
				<section className="header">
					<a href="https://twitter.com/mxstbr" className="header__logo" >
						&lt;mxstbr/&gt;
					</a>
					<a href="https://github.com/himynameisdave/postcss-plugins#submitting-a-new-plugin" className="header__add">Add a plugin</a>
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