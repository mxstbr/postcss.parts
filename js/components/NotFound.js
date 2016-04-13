import React from "react";
import capitalizeFirstLetter from "../utils/capitalize";
import getTag from "../utils/url";

const NotFound = ({location}) => {

    const { pathname } = location;

    let tagText = '';
    const tag = getTag(pathname);

    if (tag) {
        tagText = `Tag ${capitalizeFirstLetter(tag)} cannot be found. `
    }


    return (
        <div>
            <h2 className="notfound">{tagText}Try searching for a PostCSS Plugin.</h2>
        </div>
    )
}

export default NotFound;
