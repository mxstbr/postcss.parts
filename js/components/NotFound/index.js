import React from 'react';

import Heading from './Heading';

import capitalizeFirstLetter from '../../utils/capitalize';
import getTag from '../../utils/url';

const NotFound = ({ location }) => {
  const { pathname } = location;

  let tagText = '';
  const tag = getTag(pathname);
  if (tag) {
    tagText = `Tag ${capitalizeFirstLetter(tag)} cannot be found. `
  }

  return (
    <Heading>{tagText}Try searching for a PostCSS Plugin.</Heading>
  );
}

export default NotFound;
