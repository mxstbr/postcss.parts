import styled from 'styled-components';
import { Link } from 'react-router';
import { colors } from '../../constants';

export default styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  border-right: 1px solid ${colors.lightGrey};

  &:hover {
    background-color: ${colors.lightGrey};
  	cursor: pointer;
  }
`;
