import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import capitalize from '../../utils/capitalize';
import { colors } from '../../constants';

const TagLink = styled(Link)`
  width: 25%;
  float: left;
  height: calc(${colors.maxWidth} / 4);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.lightGrey};
  border-right: 1px solid ${colors.lightGrey};
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: ${colors.lightGrey};
    cursor: pointer;
  }

  &:nth-child(4n) {
    border-right: none;
  }

  @media (max-width: ${colors.maxWidth}) {
    width: 50%;
    height: calc(${colors.maxWidth} / 4);
  }
`;

const TagListItem = ({name}) => {
  return(
    <TagLink to={`/tag/${name}`}>
      <h2>{capitalize(name)}</h2>
    </TagLink>
  );
}

export default TagListItem;
