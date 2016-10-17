import React, { Component } from 'react';

import capitalize from '../../utils/capitalize';

import Link from './Link';
import Wrapper from './Wrapper';
import Input from './Input';

class SearchField extends Component {
  render() {
    const { tag, value, onChange } = this.props;
    const location = tag ? `/tag/${tag}` : '/';

    let placeholder;
    if (tag) {
      placeholder = `Search in ${capitalize(tag)}`;
    } else {
      placeholder = 'Search';
    }

    return (
      <Wrapper>
        <Input
          value={value}
          type="text"
          placeholder={placeholder}
          autoFocus
          onChange={onChange}
        />
        { value && <Link to={location}>X</Link> }
      </Wrapper>
    );
  }
}


export default SearchField;
