import React from "react";
import capitalizeFirstLetter from "../utils/capitalize";

const SearchField = ({ tag, onChange, value}) => {
    
    let placeholder = "Search";
    
    if (tag) {
      placeholder += " in " + capitalizeFirstLetter(tag);
    }
    
    return (
      <div className="plugin__search">
        <input 
          className="plugin__search-field" 
          value={value} 
          type="text" 
          placeholder={placeholder} 
          autoFocus 
          onChange={onChange} 
        />
      </div>
    );
}


export default SearchField;
