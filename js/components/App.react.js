var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var PluginList = require('./PluginList.react');
var TagList = require('./TagList.react');
var Header = require('./Header.react');
var SearchField = require('./SearchField.react');
var ListHeading = require('./ListHeading.react');

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
		var mainContent = [];
		var heading = [];

		if (this.state.searchTerm !== "" || this.state.selectedTag !== false) {
			mainContent.push(<PluginList plugins={this.state.plugins} loaded={this.state.pluginsLoaded} />);
			if (this.state.selectedTag !== false) {
				heading.push(<ListHeading text={this.state.selectedTag.capitalizeFirstLetter()} selectTag={this._selectTag}></ListHeading>);
			}
		} else {
			mainContent.push(<TagList tags={this.state.tags} selectTag={this._selectTag}/>);
		}

		return(
			<div>
				<Header />
				<section className="wrapper">
					<SearchField search={this._search} selectedTag={this.state.selectedTag} />
					{ heading }
					{ mainContent }
				</section>
			</div>
		);
	},
	_search: function(evt) {
		var text = evt.target.value;
		AppActions.search(text, this.state.selectedTag);
	},
	_selectTag: function(name) {
		AppActions.selectTag(name);
		document.querySelector(".plugin__search-field").focus();
	},
	// If the data changes, get the new data and rerender if something changed
	_onChange: function() {
	    this.setState(AppStore.getData());
	}
});

module.exports = App;
