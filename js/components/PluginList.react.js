import React from "react";
import { connect } from "react-redux";
import PluginListItem from "./PluginListItem.react";
import Spinner from "./Spinner";

//Removed keys since we were getting dupes somehow eventhough there aren't.
//Yes I know keys should be there, but meh :)

const PluginList = ({ plugins, location, params }) => {

    let content = <Spinner />

    const { query: { searchTerm } } = location;
    const { tag } = params;

    //plugins.length is our loaded check
    if (plugins.length > 0) {
        const tagPlugins = plugins.filter((plugin) => {
            const name = plugin.name.toLowerCase();
            const desc = plugin.description.toLowerCase();
            const lowerSearch = (searchTerm || '').toLowerCase();
            const tagFilter = tag ? plugin.tags.indexOf(tag) !== -1 : true;

            return tagFilter && (name.indexOf(lowerSearch) > -1 || desc.indexOf(lowerSearch) > -1)
        });

	    content = tagPlugins.map((plugin) => <PluginListItem  name={plugin.name.replace("postcss-", "")} description={plugin.description} url={plugin.url} />)
    }


    return(
      <div>
        <h2 className="visually-hidden">Plugin List</h2>
        {content}
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        plugins: state.plugins
    }
}

export default connect(mapStateToProps)(PluginList);
