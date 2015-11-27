var PluginListItem = React.createClass({
	render: function() {
		if (this.props.spinner === true) {
			return(
				<div className="plugin plugin--loading">
					<div className="sk-fading-circle">
					  <div className="sk-circle1 sk-circle"></div>
					  <div className="sk-circle2 sk-circle"></div>
					  <div className="sk-circle3 sk-circle"></div>
					  <div className="sk-circle4 sk-circle"></div>
					  <div className="sk-circle5 sk-circle"></div>
					  <div className="sk-circle6 sk-circle"></div>
					  <div className="sk-circle7 sk-circle"></div>
					  <div className="sk-circle8 sk-circle"></div>
					  <div className="sk-circle9 sk-circle"></div>
					  <div className="sk-circle10 sk-circle"></div>
					  <div className="sk-circle11 sk-circle"></div>
					  <div className="sk-circle12 sk-circle"></div>
					</div>
				</div>
			);
		}
		return(
			<a className="plugin" href={this.props.url}>
				<h2 className="plugin__name">{this.props.name}</h2>
				<h3 className="plugin__description">{this.props.description}</h3>
			</a>
		);
	}
});

module.exports = PluginListItem;
