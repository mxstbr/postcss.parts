var PluginListItem = require('./PluginListItem.react');

var PluginList = React.createClass({
  render: function() {
    var plugins = this.props.plugins;
    var loaded = this.props.loaded;
    var pluginList = [];

    if (plugins.length === 0 && loaded === false) {
			pluginList.push(<PluginListItem key={"list-item-loader"}
											spinner={true} />
			);
		} else {
			for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];
        if (plugin.name !== undefined &&
            plugin.description !== undefined &&
            plugin.repository !== undefined) {
  				pluginList.push(
            <PluginListItem key={"list-item-" + plugin.name[0]}
  						name={plugin.name[0].replace("postcss-", "")}
  						description={plugin.description[0]}
  						url={plugin.repository[0].replace("git+", "")} />
          );
        }
			}
		}

    return(
      <div>
        <h2 className="visually-hidden">Plugin List</h2>
        {pluginList}
      </div>
    );
  }
});

module.exports = PluginList;
