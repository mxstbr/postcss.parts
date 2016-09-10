import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

import capitalizeFirstLetter from "../utils/capitalize";
import constants from "../constants";

const TagLink = styled(Link)`
width: 25%;
float: left;
height: calc(${constants.maxWidth} / 4);
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid ${constants.lightGrey};
border-right: 1px solid ${constants.lightGrey};
text-decoration: none;
color: #000;

&:hover {
  background-color: ${constants.lightGrey};
  cursor: pointer;
}

&:nth-child(4n) {
  border-right: none;
}

@media (max-width: ${constants.maxWidth}) {
  width: 50%;
  height: calc(${constants.maxWidth} / 4);
}
`;

const TagListItem = ({name}) => {
  return(
    <TagLink to={`/tag/${name}`}>
      <h2>{capitalizeFirstLetter(name)}</h2>
    </TagLink>
  );
}

export default TagListItem;
