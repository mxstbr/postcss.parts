import React from 'react';
import Link from 'react-router/lib/Link';
import styled from 'styled-components';

import constants from '../../constants';

const StyledLink = styled(Link)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 1em;
  color: ${constants.textColor};
  text-decoration: none;
  padding: 1em;
  border-left: 1px solid ${constants.lightGrey};

  &:hover {
    background-color: ${constants.lightGrey};
  }
`;

export default StyledLink;
