var PluginListItem = React.createClass({
	render: function() {
		return(
			<a className="plugin" href={this.props.url}>
				<h2 className="plugin__name">{this.props.name}</h2>
				<h3 className="plugin__description">{this.props.description}</h3>
			</a>
		);
	}
});

module.exports = PluginListItem;