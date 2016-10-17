import styled from 'styled-components';
import { Link } from 'react-router';
import constants from '../../constants';

export default styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  border-right: 1px solid ${constants.lightGrey};

  &:hover {
    background-color: ${constants.lightGrey};
  	cursor: pointer;
  }
`;
