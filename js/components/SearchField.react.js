import React, { Component } from "react";
import styled from "styled-components";

import capitalizeFirstLetter from "../utils/capitalize";
import constants from "../constants";

import Clear from "./Clear.react";

const SearchWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${constants.lightGrey};
  ${props => console.log(props.theme)}
  position: relative;
  padding-right: 2em;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2em;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  font-size: 1.5em;
  line-height: 1.5em;
  padding-left: 1em;
  border-radius: 5px 5px 0 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  outline: none;

  &::-webkit-input-placeholder { /* WebKit browsers */
      color: ${constants.midGrey};
      font-weight: 300;
  }
  &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
     color: ${constants.midGrey};
     font-weight: 300;
     opacity:  1;
  }
  &::-moz-placeholder { /* Mozilla Firefox 19+ */
     color: ${constants.midGrey};
     font-weight: 300;
     opacity:  1;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10+ */
     color: ${constants.midGrey};
     font-weight: 300;
  }
`;

class SearchField extends Component {
  render() {

    const { tag, value, onChange } = this.props;

    let placeholder = "Search";

    if (tag) {
      placeholder += " in " + capitalizeFirstLetter(tag);
    }

    const location = tag ? `/tag/${tag}` : '/';

    return (
      <SearchWrapper>
        <SearchInput
          value={value}
          type="text"
          placeholder={placeholder}
          autoFocus
          onChange={onChange}
          ref={(c) => this.input = c}
        />
        { value && <Clear location={location} onClear={() => this.input.focus()} /> }
      </SearchWrapper>
    );
  }
}


export default SearchField;
