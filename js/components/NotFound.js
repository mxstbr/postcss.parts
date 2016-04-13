import React from "react";
import capitalizeFirstLetter from "../utils/capitalize";

const NotFound = ({location}) => {
    
    const { pathname } = location;
    const locationPieces = pathname.substr(1).split('/');
    const tag = locationPieces.length === 2 && locationPieces[0] === 'tag' ? capitalizeFirstLetter(locationPieces[1]) : false;
    let tagText = '';
    
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