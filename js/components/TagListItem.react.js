import React from "react";
import { Link } from "react-router";
import capitalizeFirstLetter from "../utils/capitalize";

const TagListItem = ({name}) => {
    return(
        <Link to={`/tag/${name}`} className="tag">
            <h2 className="tag__name">{capitalizeFirstLetter(name)}</h2>
        </Link>
    );
}

export default TagListItem;