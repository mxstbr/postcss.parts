import React from "react";

const PluginListItem = ({ url, name, description }) => {
    return(
        <a className="plugin" href={url}>
            <h2 className="plugin__name">{name}</h2>
            <h3 className="plugin__description">{description}</h3>
        </a>
    );
}

export default PluginListItem;
