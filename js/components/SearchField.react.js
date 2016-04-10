import React from "react";
import capitalizeFirstLetter from "../utils/capitalize";

const SearchField = ({ tag, search, value}) => {
    
    let placeholder = "Search";
    
    if (tag) {
      placeholder += " in " + capitalizeFirstLetter(tag);
    }
    
    return (
      <div className="plugin__search">
        <input className="plugin__search-field" value={value} type="search" placeholder={placeholder} autoFocus={true} onChange={search} />
      </div>
    );
}


export default SearchField;
