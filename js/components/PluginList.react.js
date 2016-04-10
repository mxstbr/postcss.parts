var PluginListItem = require('./PluginListItem.react');

//Removed keys since we were getting dupes somehow eventhough there aren't.
//Yes I know keys should be there, but meh :)

var PluginList = React.createClass({
  render: function() {
    var plugins = this.props.plugins;
    var loaded = this.props.loaded;
    var pluginList = [];

    if (plugins.length === 0 && loaded === false) {
			pluginList.push(<PluginListItem spinner={true} />
			);
		} else {
			plugins.forEach(function(plugin){
				pluginList.push(<PluginListItem 
													name={plugin.name.replace("postcss-", "")}
													description={plugin.description}
													url={plugin.url} />);
			});
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
