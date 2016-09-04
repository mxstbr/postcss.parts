import React from "react";
import styled from 'styled-components';
import capitalizeFirstLetter from "../utils/capitalize";
import getTag from "../utils/url";

const Heading = styled.h2`
text-align: center;
padding: 5em 0;
`;

const NotFound = ({ location }) => {
  const { pathname } = location;

  let tagText = '';
  const tag = getTag(pathname);
  if (tag) {
    tagText = `Tag ${capitalizeFirstLetter(tag)} cannot be found. `
  }

  return (
    <div>
      <Heading>{tagText}Try searching for a PostCSS Plugin.</Heading>
    </div>
  )
}

export default NotFound;
