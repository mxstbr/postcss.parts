import React from 'react';
import { connect } from 'react-redux';
import PluginListItem from './PluginListItem';
import VisuallyHidden from './VisuallyHidden';
import Spinner from './Spinner';

const PluginList = ({ plugins, location, route }) => {
  const { query: { searchTerm } } = location;
  const { tag } = route;
  let content = <Spinner />

  const isLoaded = plugins.length > 0;
  if (isLoaded) {
    const tagPlugins = plugins.filter((plugin) => {
      const name = plugin.name.toLowerCase();
      const desc = plugin.description.toLowerCase();
      const lowerSearch = (searchTerm || '').toLowerCase();
      const tagFilter = tag ? plugin.tags.indexOf(tag) !== -1 : true;

      return tagFilter && (name.indexOf(lowerSearch) > -1 || desc.indexOf(lowerSearch) > -1)
    });

    content = tagPlugins.map((plugin) => {
      const name = plugin.name.replace("postcss-", "");
      return (
        <PluginListItem
          name={name}
          key={name}
          description={plugin.description}
          url={plugin.url}
          stars={plugin.stars}
        />
      );
    });
  }

  return(
    <div>
      <VisuallyHidden component="h2">Plugin List</VisuallyHidden>
      {content}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plugins: state.plugins,
  }
}

export default connect(mapStateToProps)(PluginList);
