import React, { Component } from "react";
import capitalizeFirstLetter from "../utils/capitalize";

import Clear from "./Clear.react";

class SearchField extends Component {
  render() {

    const { tag, value, onChange } = this.props;

    let placeholder = "Search";
    
    if (tag) {
      placeholder += " in " + capitalizeFirstLetter(tag);
    }

    const location = tag ? `/tag/${tag}` : '/';
    
    return (
      <div className="plugin__search">
        <input 
          className="plugin__search-field" 
          value={value} 
          type="text" 
          placeholder={placeholder} 
          autoFocus 
          onChange={onChange}
          ref={(c) => this.input = c}
        />
        { value && <Clear location={location} onClear={() => this.input.focus()} /> }
      </div>
    );
  }
}


export default SearchField;
